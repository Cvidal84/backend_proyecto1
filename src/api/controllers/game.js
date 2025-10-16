//CRUD CREATE READ UPDATE DELETE

const { Game } = require("../models/game");//al usar esto en el get lo traemos automaticamente

const getGames = async (req, res, next) =>{
    try {
        const games = await Game.find();
        return res.status(200).json(games); //para traerme los juegos
    } catch (error) {
        return res.status(400).json("Error ⚠️");
    }
}

const postGame = async (req, res, next) =>{
    try {
        const newGame = new Game(req.body); //lo traemos del body que le pasamos
        const gameSaved = await newGame.save();//lo guardamos
        return res.status(201).json({
        message: `The game ${gameSaved.title} was successfully posted ✅`,
        game: gameSaved
        });
    } catch (error) {
        return res.status(400).json("Error ⚠️");
    }
}

const updateGame = async (req, res, next) =>{
    try {
        const {id} = req.params;//este id viene de la declaracion del parametro en la ruta
        const newGame = new Game(req.body);
        newGame._id = id;
        const gameUpdated = await Game.findByIdAndUpdate(id, newGame,{new: true});
        return res.status(200).json({
        message: `The game ${gameUpdated.title} was successfully updated ✅`,
        game: gameUpdated
        });
    } catch (error) {
        return res.status(400).json("Error ⚠️");
    }
}

const deleteGame = async (req, res, next) =>{
    try {
        const {id} = req.params;
        const gameDeleted = await Game.findByIdAndDelete(id);
        return res.status(200).json({
        message: `The game ${gameDeleted.title} was successfully deleted ✅`,
        game: gameDeleted
        });
    } catch (error) {
        return res.status(400).json("Error ⚠️");
    }
}

module.exports = {
    getGames,
    postGame,
    updateGame,
    deleteGame
}