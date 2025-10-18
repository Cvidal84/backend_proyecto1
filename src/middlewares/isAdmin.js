//una función que solo deja editar el perfil del usuario si eres admin, si eres user no puedes hacer nada.

const isAdmin = (req, res, next) =>{
    if (req.user.role === "admin") {
        next(); //si es admin seguimos adelante
    } else {
        return res.status(403).json("No tienes permisos para hacer este cambio ❌")
    }
}

module.exports = { isAdmin };