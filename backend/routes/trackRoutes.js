const express = require('express');
const router = express.Router()
const trackController = require('../controllers/trackController')


//Post Method
router.post('/post', trackController.createTrack)

//Get all Method
router.get('/getAll', trackController.getAllTracks)

//Get by ID Method
router.get('/getOne/:id', trackController.getOneTrack)

//Update by ID Method
router.patch('/update/:id', trackController.updateTrack)

//Delete by ID Method
router.delete('/delete/:id', trackController.deleteTrack)

module.exports = router;