const mongoose= require("mongoose")
const Schema = mongoose.Schema

const carSchema = new Schema({
    make:{
        type: String
    },
    model:{
        type: String
    },
    year:{
        type: Number
    },
    variant:{
        type: String
    },
    mileage:{
        type: String
    },
    fuelType:{
        type:String
    },
    transmissionType:{
        type: String
    },
    price:{
        type: Number
    },
    color:{
        type: String
    },
    description:{
        type: String
    },
    Status:{
        type: String
    },
    listingDate:{
        type: Date
    },
    registrationNum:{
        type: String
    },
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    cityId:{
        type: Schema.Types.ObjectId,
        ref: 'City',
        required: true
    },
    stateId:{
        type: Schema.Types.ObjectId,
        ref: 'State',
        required: true
    },
    registrationYear:{
        type: Date
    }

})
module.exports = mongoose.model('Car', carSchema);