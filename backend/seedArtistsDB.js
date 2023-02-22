require('dotenv').config(); 
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const artistModel = require('./model/artistModel');


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
const Damso = "2UwqpfQtNuhBwviIC0f2ie";

(async () => {
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
        console.log("token: ", data.access_token);
        return data.access_token;
    }
    getToken()

    const getArtists = async (token) => {
        const limit = 50;
        const result = await fetch(`https://api.spotify.com/v1/artists/${Damso}/related-artists`, {
            method: 'GET',
            headers: { 'Authorization': 'Bearer ' + token }
        });
        const data = await result.json();
        console.log("artists: ", data);
        return data;
    }

    getArtists(await getToken());

    //save the artists in the database


})();
