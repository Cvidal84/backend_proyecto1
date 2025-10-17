
const User = require("../models/user");



const register = async (req, res, next) =>{
    try {
        const user = new User(req.body);

        // para que no se repita el usuario, miramos por email
        const userDuplicated = await User.findOne({email: req.body.email});

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
        
    } catch (error) {
        return res.status(400).json("error ⚠️");
    }
}



module.exports = {
    register,
    login,
    }