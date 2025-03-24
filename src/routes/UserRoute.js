const routes = require("express").Router()
const userController= require("../controllers/UserController")


routes.get("/users",userController.getAllUsers)
routes.delete("/users/:id",userController.deleteUserByID)

routes.post("/users",userController.addUsers)
routes.post("/user/login",userController.loginUser)
routes.post("/user",userController.signup)



module.exports = routes