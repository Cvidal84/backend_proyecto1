const { getGames, postGame, updateGame, deleteGame } = require("../controllers/game");

const gamesRouter = require("express").Router();

//las rutas
gamesRouter.get("/", getGames);
gamesRouter.post("/", postGame);
gamesRouter.put("/:id", updateGame);
gamesRouter.delete("/:id", deleteGame);



module.exports = {gamesRouter};