const mongoose = require("mongoose")
const Schema= mongoose.Schema

const  insuranceSchema = new Schema({
    insuranceType:{
        enum :['thirdParty', 'full', 'comprehensive'],
        type: String
    }
})

module.exports= mongoose.model('Insurance', insuranceSchema)