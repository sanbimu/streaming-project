
require('dotenv').config(); 
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const trackModel = require('./model/trackModel');


const mongoString = process.env.DATABASE_URL;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

mongoose.connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
const database = mongoose.connection;
database.on('error', (error) => console.error(error));
database.once('open', () => console.log('Connected to database'));
const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => console.log(`Server started on port ${3000}`));

(async () => {
    //1. get authentification token for using spotify API 
    const getToken = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await result.json();
        return data.access_token;
    }

    //2. get genres from spotify API
    const getGenres = async (token) => {
        const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });
        const data = await result.json();
        return data.categories.items;
    }
    const genres = await getGenres(await getToken());
    console.log('Genres from spotify is: \n');
    genres.forEach(genre => console.log(genre.name));
   

    //3. get playlist from spotify API
    const getPlaylist = async (token, genreId) => {
        const limit = 50;
        const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });
        const data = await result.json();
        return data.playlists.items;
    }
    //save playlists in the array
    const playlist = await getPlaylist(await getToken(), genres[4].id);
    const playlistDance = await getPlaylist(await getToken(), genres[5].id);
    //const playlistPop = await getPlaylist(await getToken(), genres[3].id);
    console.log(`Playlists from genre ${genres[4].name} is: \n`);
    playlist.forEach(playlist => console.log(playlist.name))
    console.log(`\n`)

    //4. get tracks from spotify API
    const getTracks = async (token, playlistId) => {
        const limit = 100;
        const result = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });
        const data = await result.json();
        return data.items;
    }


    //5. create an array with all the tracks from the hiphop playlists
    const tracks = [];
    for (let i = 0; i < playlist.length; i++) {
        const track = await getTracks(await getToken(), playlist[i].id);
        tracks.push(...track);
    }   
    const onlyTracks = tracks.map(track => track.track).filter(track => track );
    

    //5.2 create an array with all the tracks from the dance playlists
    const tracksDance = [];
    for (let i = 0; i < playlistDance.length; i++) {
        const track = await getTracks(await getToken(), playlistDance[i].id);
        tracksDance.push(...track);
    }
    const onlyTracksDance = tracksDance.map(track => track.track).filter(track => track );
    onlyTracks.push(...onlyTracksDance);

    //5.3 create an array with all the tracks from the pop playlists
    // const tracksPop = [];
    // for (let i = 0; i < playlistPop.length; i++) {
    //     const track = await getTracks(await getToken(), playlistPop[i].id);
    //     tracksPop.push(...track);
    // }
    // const onlyTracksPop = tracksPop.map(track => track.track).filter(track => track );
    // onlyTracks.push(...onlyTracksPop);

    //6. unique onlyTracks array
    const uniqueTracks = onlyTracks.filter((track, index, self) =>  
        index === self.findIndex((t) => (
            t.id === track.id
        ))
    )
    //console.log("all the tracks hiphop + dance: ", onlyTracks.length);
    console.log("unique tracks hiphop + dance: ", uniqueTracks.length);
   


   //6 save the tracks in the database
   const seedDB = async () => {
        await trackModel.deleteMany({});
        await trackModel.insertMany(uniqueTracks);
        console.log("Database seeded");
    }
    seedDB().then(() => {
        database.close();
    });

    
    
})();
