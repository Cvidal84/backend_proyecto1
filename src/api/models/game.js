const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    title: {type: String, required: true, trim: true},
    company: {type: String, required: true, trim: true},
    categories: [{type: String, enum:["Action", "Adventure", "RPG", "Simulation", "Strategy", "Sports"], required: true }],
    img: {type: String, required: true}
}, {
    timestamps:true,
})

//creo el modelo, siempre con mayúscula
const Game = mongoose.model("games", gameSchema, "games");
module.exports = { Game };