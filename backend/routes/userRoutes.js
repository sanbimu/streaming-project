const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//post signup
router.post('/signup', userController.signup);

//post login
router.post('/login', userController.login);

//get all users
router.get('/getAll', userController.getAllUsers);

//get one user
router.get('/getOne/:id', userController.getOneUser);

//update one user
router.patch('/update/:id', userController.updateUser);

//delete one user
router.delete('/delete/:id', userController.deleteUser);


module.exports = router;