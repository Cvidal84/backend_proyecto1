
const { isAdmin } = require("../../middlewares/isAdmin");
const { isAuth } = require("../../middlewares/isAuth");
const { register, login, getUsers, updateUser } = require("../controllers/user");

const usersRouter = require("express").Router();

usersRouter.post("/register", register);
usersRouter.post("/login", login);
usersRouter.get("/", isAuth, getUsers)
usersRouter.put("/update/:id", isAuth, isAdmin, updateUser)


module.exports = { usersRouter };