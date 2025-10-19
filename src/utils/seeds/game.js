const mongoose = require("mongoose");
//si exporto con llaves, luego tengo que importar con llaves ojo al dato!!!
const {Game} = require("../../api/models/game");
const {games} = require("../../data/games");

const lanzarSemilla = async () => {
    try {
        //nos conectamos a la base de datos
        await mongoose.connect("mongodb+srv://carlos:carlos000666@cluster0.0zzo8oh.mongodb.net/testapi?retryWrites=true&w=majority&appName=Cluster0");
        //eliminamos lo que haya
        await Game.collection.drop();
        console.log("Paso 1: Juegos eliminados de BBDD 💣")
        //meter datos en la coleccion
        await Game.insertMany(games)
        console.log("Paso 2: Juegos introducidos desde data 🔥")
        await mongoose.disconnect();
        console.log("Paso 3: Desconectamos de la base de datos ❌")

    } catch (error) {
        console.log("Error semilla 🌱")
    }
}
lanzarSemilla();