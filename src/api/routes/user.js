
const { isAuth } = require("../../middlewares/isAuth");
const { register, login, getUsers } = require("../controllers/user");

const usersRouter = require("express").Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.get("/", isAuth, getUsers)


module.exports = { usersRouter };