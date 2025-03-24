const routes = require("express").Router()
const insuranceController =  require("../controllers/InsuranceController")


routes.post("/addinsurance", insuranceController.addinsurance);   
// routes.get("/city", cityController.getcities);   

module.exports = routes

