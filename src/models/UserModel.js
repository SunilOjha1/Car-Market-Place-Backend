const mongoose = require("mongoose")
const { schema } = require("./RoleModel")
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstname:{
        type: String,
    },
    lastname:{
        type: String,
    },
    age:{
        type:Number,
    },
    status:{
        type:Boolean,
    },
    roleId:{
        type: Schema.Types.ObjectId, 
        ref:"roles"

    },
    password:{
        type:String
    },
    email:{
        type: String,
        unique: true
    }



})

module.exports = mongoose.model("user",userSchema)