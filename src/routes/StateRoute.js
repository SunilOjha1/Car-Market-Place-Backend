const routes = require('express').Router()
const stateController = require('../controllers/StateController')

routes.post("/addstate", stateController.addState)
routes.get("/getAllstate", stateController.getAllStates)


module.exports = routes