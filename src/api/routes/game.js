const { upload } = require("../../middlewares/file");
const { getGames, postGame, updateGame, deleteGame } = require("../controllers/game");

const gamesRouter = require("express").Router();

//las rutas
gamesRouter.get("/", getGames);
gamesRouter.post("/", upload.single("img"), postGame);
gamesRouter.put("/:id", updateGame);
gamesRouter.delete("/:id", deleteGame);



module.exports = {gamesRouter};