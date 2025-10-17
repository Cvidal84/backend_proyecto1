//usaremos brypt en el modelo para cifrar contraseñas
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
        email: {type: String, required: true},
        password: {type: String, required: true},
    },
    {
        timestamps: true,
    }
);
//antes de hacer el paso de guardar el esuqema haz una funcion, sin arrow function.
userSchema.pre("save", function () {
    this.password = bcrypt.hashSync(this.password,10);
})


const User = mongoose.model("users", userSchema, "users");
module.exports = User;