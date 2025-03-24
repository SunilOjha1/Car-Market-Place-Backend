const insuranceModel = require("../models/InsuranceModel")

const addinsurance = async (req, res) => {
    try{
        const savedInsurance = await insuranceModel.create(req.body)
        res.status(201).json({
            message:"About Insurance",
            data: savedInsurance,
        })
    }catch(err){
        res.status(500).json({
            message: err
        })
    }
}

module.exports ={
    addinsurance
}