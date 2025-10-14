//traemos el modulo mongoose
const mongoose = require("mongoose");

//función asíncrona para conectarnos

const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("Conectado con éxito a la BBDD✅")
    } catch (error) {
        console.log("No se ha podido conectar a la BBDD❌")
    }
}

//exportamos la funcion para usarla en index.js
module.exports = { connectDB }
