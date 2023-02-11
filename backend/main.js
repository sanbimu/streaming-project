import {clientId, clientSecret} from './secret.js';

//IFFI function (self calling function)
const APIController = ( async () => {

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
    console.log("all the genres: ")
    genres.forEach(element => {
        
        console.log(element.id, element.name);  
    });
    

    //3. get playlist from spotify API
    const getPlaylist = async (token, genreId) => {
        const limit = 10;
        const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });
        const data = await result.json();
        return data.playlists.items;
    }
    //save the hiphop playlists in the array
    const playlist = await getPlaylist(await getToken(), '0JQ5DAqbMKFQ00XGBls6ym');
    console.log("first hipHop playlist: ", playlist[0]);


    //4. get tracks from spotify API
    const getTracks = async (token, playlistId) => {
        const limit = 10;
        const result = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });
        const data = await result.json();
        return data.items;
    }
    //save the tracks of first playlist in an array
    const tracks=await getTracks(await getToken(), playlist[0].id);
    console.log("all tracks of playlist 1: ", tracks);

    const getTrack = async (token, trackId) => {
        const result = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });
        const data = await result.json();
        return data;
    }
    //get one track
    const track = await getTrack(await getToken(), tracks[0].track.id);
    console.log("track 1: ", track);
})();