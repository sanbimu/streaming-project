const Model = require('../model/userModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET;

exports.signup = async (req, res) => {
    try{
        const hashedPassword = await bcryptjs.hash(req.body.password, 10)
        const user = new Model({
            username: req.body.username,
            password: hashedPassword,
            email: req.body.email
        })
        const userToSave = await user.save()
        res.status(200).json(userToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}

exports.login = async (req, res) => {
    try{
        const user = await Model.findOne({username: req.body.username})
        if(user){
            const result = await bcryptjs.compare(req.body.password, user.password)
            if(result){
                const token = jwt.sign({username: user.username, email: user.email}, secret)
                res.status(200).json({token: token})
            }
            else{
                res.status(400).json({message: 'Wrong password'})
            }
        }
        else{
            res.status(400).json({message: 'User not found'})
        }

    }catch(error){
        res.status(400).json({message: error.message})
    }
}

exports.getAllUsers = async (req, res) => {
    try{
        const users = await Model.find();
        res.status(200).json(users)
    }
        catch(error){
        res.status(400).json({message: error.message})
    }
}

exports.getOneUser = async (req, res) => {
    try{
        const user = await Model.findById(req.params.id);
        res.status(200).json(user)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}

exports.updateUser = async (req, res) => {
    try{
        const id = req.params.id;
        const updateUser = req.body;
        const options = {new: true};

        const result = Model.findByIdAndUpdate(id, updateUser, options);
        res.status(200).send(result);
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}

exports.deleteUser = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await Model.findByIdAndDelete(id);
        res.status(200).send(`username: ${result.username} deleted`);
    }catch{
        res.status(400).json({message: error.message})
    }
}



