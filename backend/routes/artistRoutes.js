const express = require('express');
const router = express.Router()
const artistController = require('../controllers/artistController')

//Get all Method
router.get('/getAll', artistController.getAll)

//Get by ID Method
router.get('/getOne/:id', artistController.getOne)

module.exports = router;