const Model = require('../model/artistModel');

exports.getAll = async (req, res) => {
    try{
        const artists = await Model.find();
        res.status(200).json(artists)
    }
        catch(error){
        res.status(400).json({message: error.message})
    }
}
exports.getOne = async (req, res) => {
    try{
        const artist = await Model.findById(req.params.id);
        res.status(200).json(artist)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}