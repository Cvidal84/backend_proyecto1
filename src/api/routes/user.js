const { register, login, getUsers } = require("../controllers/user");

const usersRouter = require("express").Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);


module.exports = { usersRouter };