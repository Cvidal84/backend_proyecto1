const mongoose = require("mongoose");

const platformSchema = new mongoose.Schema({
    name: {type: String, required:true, trim:true},
    releaseYear: {type: Number, required:true, trim:true}
}, {
    timestamps:true,
})

//creo el modelo con mayuscula
const Platform = mongoose.model("platforms", platformSchema, "platforms");
module.exports = { Platform };