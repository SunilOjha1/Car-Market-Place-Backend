const routes =  require("express").Router()
const roleController= require("../controllers/RoleController")

routes.get("/roles",roleController.getAllRoles)
// routes.post("/roles",roleController.addRole )
// routes.delete("/roles",roleController.deleteRole )
// routes.get("/roles",roleController.getRoleByID )

module.exports = routes