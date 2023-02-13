const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//post signup
router.post('/signup', userController.signup);

//post login
router.post('/login', userController.login);

module.exports = router;