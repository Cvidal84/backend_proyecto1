
const { generateToken } = require("../../utils/jwt/jwt");
const User = require("../models/user");
const bcrypt = require("bcrypt");



const register = async (req, res, next) =>{
    try {
        const user = new User(req.body);

        // para que no se repita el usuario, miramos por email
        const userDuplicated = await User.findOne({email: req.body.email});
        //para duplicados
        if(userDuplicated){
            return res.status(400).json("Este usuario ya existe en la base de datos ❌")
        }

        const userSaved = await user.save();
        return res.status(201).json(userSaved);
    } catch (error) {
        return res.status(400).json("error ⚠️");
    }
}

const login = async (req, res, next) =>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        //si el usuario no esta responde incorrecto
        if (!user) {
            return res.status(400).json("Usuario o contraseña incorrectos ❌")
        }
        //si esta el usuario, compara la contraseña que puse con la del usuario, encripta ambas para compararlas
        if (bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user._id);
            return res.status(200).json({ token, user });
        } else {
            return res.status(400).json("Usuario o contraseña incorrectos ❌")
        }
    } catch (error) {
        return res.status(400).json("error ⚠️");
    }
}



module.exports = {
    register,
    login,
    }