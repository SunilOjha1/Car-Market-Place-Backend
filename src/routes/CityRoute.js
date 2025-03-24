const routes = require("express").Router()
const cityController = require("../controllers/CityController")


routes.post("/addcity", cityController.addcity);   
routes.get("/city", cityController.getcities);   

module.exports = routes
