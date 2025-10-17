//accedemos a las variables del .env
require("dotenv").config();
//traemos el express que hemos instalado ❌✅
const express = require("express");
const { connectDB } = require("./src/config/db");//importamos para usar la funcion de bd.js
const { gamesRouter } = require("./src/api/routes/game");
const { platformsRouter } = require("./src/api/routes/platform");
const { usersRouter } = require("./src/api/routes/user");
const app = express();

//conectar a la bbdd
connectDB();

//con esto podemos usar .json en nuestro server
app.use(express.json());

//despues de hacer las rutas en el games las llamamos aquí. luego platforms
app.use("/api/v1/games", gamesRouter)
app.use("/api/v1/platforms", platformsRouter)
app.use("/api/v1/users", usersRouter)

//hacemos una prueba de que funcione con un /saludar
app.use("/saludar", (req, res, next) =>{
    return res.status(200).json("Hola!!")
})
//todas las rutas que no tengan respuesta entrn aquí
app.use((req, res, next) =>{
    return res.status(404).json("Ruta no encontrada❌")
}) 


//levantamos nuestro server
const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log(`Servidor levantado en http://localhost:${PORT}✅`)
})
