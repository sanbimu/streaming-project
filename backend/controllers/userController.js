const Model = require('../model/userModel');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
                const token = jwt.sign({username: user.username, email: user.email}, process.env.TOKEN_SECRET)
                res.status(200).json({token: token})
            }
            else{
                res.status(400).json({message: 'Wrong password'})
            }
        }
        else{
            res.status(400).json({message: 'User not found'})
        }

    }catch{
        res.status(400).json({message: error.message})
    }
}
