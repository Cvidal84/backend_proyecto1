//una función que solo deja editar el perfil del usuario si eres admin, si eres user no puedes hacer nada.

const isAdmin = (req, res, next) => {

  // Si es admin, puede hacer cualquier cosa
  if (req.user.role === "admin") {
    // si el admin se edita a sí mismo, mantenemos su rol
    if (req.params.id && String(req.params.id) === String(req.user._id)) {
      req.body.role = "admin";
    }
    return next();
  }

  // Si es user
  if (req.user.role === "user") {
    if (req.params.id && String(req.params.id) !== String(req.user._id)) {
      return res.status(403).json("No puedes editar a otro usuario ❌");
    }

    const { email, password } = req.body;
    if (email || password) {
      return next();
    }

    return res.status(403).json("Sólo tienes permitido cambiar tu email o contraseña ⚠️");
  }
};

module.exports = { isAdmin };
