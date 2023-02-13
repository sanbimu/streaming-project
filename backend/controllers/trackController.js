const Model = require('../model/trackModel');


exports.createTrack = async (req, res) => {
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
    try{
        const trackToSave = await track.save();
        res.status(200).json(trackToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})

    }
}

exports.getAllTracks = async (req, res) => {
    try{
        const tracks = await Model.find();
        res.status(200).json(tracks)
    }
        catch(error){
        res.status(400).json({message: error.message})
    }
}

exports.getOneTrack = async (req, res) => {
    try{
        const track = await Model.findById(req.params.id);
        res.status(200).json(track)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}

exports.updateTrack = async (req, res) => {
    try{
        const id = req.params.id;
        const updateTrack = req.body;
        const options = {new: true};

        const result = await Model.findByIdAndUpdate(id, updateTrack, options);
        res.status(200).send(result);
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
}

exports.deleteTrack = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await Model.findByIdAndDelete(id);
        res.status(200).send(`trackname: ${result.name} deleted`);
    }catch{
        res.status(400).json({message: error.message})
    }
}

exports.deleteAllTracks = async (req, res) => {
    try{
        const id = req.params.id;
        const result = await Model.findByIdAndDelete(id);
        res.status(200).send(`trackname: ${result.name} deleted`);
    }catch{
        res.status(400).json({message: error.message})
    }
}