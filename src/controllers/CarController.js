const carModel = require("../models/CarModel")

const addcar= async(req,res)=>{
    try{

        const savedCar = await carModel.create(req.body)
        res.status(201).json({
            message:"car  added successfully",
            data: savedCar,
        })

    }catch(err){
        res.status(500).json({
            message: err
        })
    }
}
const getAllCar = async(req, res)=>{
    try{
        const cars= await carModel.find()
        res.status(201).json({
            message: "car details fetched",
            data: cars,
        })
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
}


module.exports={
    addcar, getAllCar
}