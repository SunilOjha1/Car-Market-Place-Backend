const routes = require("express").Router()
const carController = require("../controllers/CarController")


routes.post("/cars", carController.addcar);   
routes.get("/getcars", carController.getAllCar);   

module.exports = routes
