GESTION BACKEND - API REST - GAMES

En el proyecto se ha utilizado:
- Express para el servidor.
- Mongoose para la conexión a MongoDB.
- bcrypt para cifrar contraseñas.
- jsonwebtoken para los tokens JWT.
- dotenv para las variables de entorno.
- multer y multer-storage-cloudinary junto con cloudinary para subir y guardar imágenes.
- nodemon para desarrollo.

Tenemos nuestro index.js, desde el que ejecutamos todo. Desde el que levantamos el servidor en el localhost 8080, conectamos a Mongo Db(nuestra base de datos), conectamos también a Cloudinary(para almacenar las fotos de los juegos)y desde donde llamamos a las rutas.

Luego para montar nuestra API hemos creado: 
1- Modelos o schemas, en este caso 3 diferentes:
- game.js Schema en el que hemos definido como se crearán nuestros juegos.
- platform.js Schema en el que hemos definido las plataformas.
- user.js Schema donde hemos definido como se van a crear los usuarios.

2- Controladores, también tres diferentes:
- game.js Hemos creado getGames (para que nos muestre todos los juegos de la base de datos), postGame (para subir un juego a la base de datos, podemos subir una imagen desde nuestro ordenador a cloudinary para adjuntarla al juego), updateGame (para modificar un juego existente en la base de datos), deleteGame (para borrar un juego de la base de datos, esto también borrará la imagen de cloudinary automáticamente).
- platform.js Hemos creado un CRUD básico con getPlatforms (obtenemos todas las plataformas de la base de datos), getPlatform (obtenemos una plataforma en concreto), postPlatform (agregamos una plataforma), updatePlatform (modificamos una plataforma), deletePlatform (borramos una plataforma).

3- Routes, también tres diferentes:
- game.js       
gamesRouter.get("/", getGames);
gamesRouter.post("/", upload.single("img"), postGame);
gamesRouter.put("/:id", updateGame);
gamesRouter.delete("/:id", deleteGame);

- platform.js
platformsRouter.get("/:id", getPlatform);
platformsRouter.get("/", getPlatforms);
platformsRouter.post("/", postPlatform);
platformsRouter.put("/:id", updatePlatform);
platformsRouter.delete("/:id", deletePlatform);

-user.js
usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.get("/", isAuth, getUsers)
usersRouter.put("/update/:id", isAuth, isAdmin, updateUser)
usersRouter.delete("/delete/:id", isAuth, isAdmin, deleteUser)

Hemos creado dos middlewares para el control de registro de usuarios:
- isAuth - Controla si el usuario se autentifica correctamente. Hemos usado para ello verifyJwt para generar los token.

- isAdmin comprueba si el usuario es Admin o no para dejarle hacer las funciones que tiene permiso. El admin puede modificarse a el mismo o a los user, y también puede borrar el usuario que quiera. Sin embargo el  user, solo se puede editar a si mismo (el campo role no puede tocarlo) y sólo puede borrarse a si mismo.

Por otro lado en seeds hemos creado una semilla de 10 juegos por si jugando con los comandos perdemos algunos poder recuperarlos rapidamente con el comando gamesSeed.

También tenemos el db.js donde conectamos a nuestra base de datos. mongo atlas.