const { getPlatforms, postPlatform, updatePlatform, deletePlatform, getPlatform } = require("../controllers/platform");

const platformsRouter = require("express").Router();

//Rutas
platformsRouter.get("/:id", getPlatform);
platformsRouter.get("/", getPlatforms);
platformsRouter.post("/", postPlatform);
platformsRouter.put("/:id", updatePlatform);
platformsRouter.delete("/:id", deletePlatform);

module.exports = { platformsRouter };