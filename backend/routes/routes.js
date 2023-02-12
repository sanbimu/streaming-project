const express = require('express');
const router = express.Router()
module.exports = router;
const Model = require('../model/model');

//Post Method
router.post('/post', async (req, res) => {
    const track = new Model({
        album: req.body.album,
        artists: req.body.artists,
        available_markets: req.body.available_markets,
        disc_number: req.body.disc_number,
        duration_ms: req.body.duration_ms,
        explicit: req.body.explicit,
        external_ids: req.body.external_ids,
        external_urls: req.body.external_urls,
        href: req.body.href,
        id: req.body.id,
        is_local: req.body.is_local,
        name: req.body.name,
        popularity: req.body.popularity,
        preview_url: req.body.preview_url,
        track_number: req.body.track_number,
        type: req.body.type,
        uri: req.body.uri
    })
    track.save()
        .then(data => res.json(data))
        .catch(error => res.status(400).json('Error: '+ error))
})

//Get all Method
router.get('/getAll', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    //res.send('Get by ID API')
    res.send(req.params.id)
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})