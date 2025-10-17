//creamos el crud basico

const { Platform } = require("../models/platform");

const getPlatforms = async (req, res, next) =>{
    try {
        const platforms = await Platform.find().populate("games");
        return res.status(200).json(platforms);
    } catch (error) {
        return res.status(400).json("Error ⚠️");
    }
}

const getPlatform = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const platform = await Platform.findById(id).populate("games");//el populate es para ver los objetos de juegos dentro del array.
        return res.status(200).json(platform);
    } catch (error) {
        return res.status(400).json("Error ⚠️");
    }
}

const postPlatform = async (req, res, next) =>{
    try {
        const newPlatform = new Platform(req.body);
        const platformSaved = await newPlatform.save();
        return res.status(201).json({
        message: `The platform ${platformSaved.name} was successfully posted ✅`,
        platform: platformSaved
        });
    } catch (error) {
        return res.status(400).json("Error ⚠️");
    }
}

const updatePlatform = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const newPlatform = new Platform(req.body);
        newPlatform._id = id;
        const platformUpdated = await Platform.findByIdAndUpdate(id, newPlatform,{new:true});
        return res.status(200).json({
        message: `The platform ${platformUpdated.name} was successfully updated ✅`,
        platform: platformUpdated
        });
    } catch (error) {
        return res.status(400).json("Error ⚠️");
    }
}

const deletePlatform = async (req, res, next) =>{
    try {
        const { id } = req.params;
        const platformDeleted = await Platform.findByIdAndDelete(id);
        return res.status(200).json({
        message: `The platform ${platformDeleted.name} was successfully deleted ✅`,
        platform: platformDeleted
        });
    } catch (error) {
        return res.status(400).json("Error ⚠️");
    }
    
}

module.exports = {
    getPlatforms,
    getPlatform,
    postPlatform,
    updatePlatform,
    deletePlatform
}