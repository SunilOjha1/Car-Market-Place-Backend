const cityModel = require("../models/CityModel")

const addcity = async (req, res) => {
    try{
        const savedCity = await cityModel.create(req.body)
        res.status(201).json({
            message:"City  added successfully",
            data: savedCity,
        })
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
}

const getcities = async(req, res)=> {
    try{
        const cities = await cityModel.find()
        res.status(201).json({
            message:"All cities Found",
            data: cities,
        })
    }catch(err){
        res.status(500).json({
            message:err
        })
    }
}


module.exports = {
    addcity, getcities
}