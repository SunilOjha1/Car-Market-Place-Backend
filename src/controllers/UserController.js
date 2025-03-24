const userModel = require("../models/UserModel")
const bcrypt = require("bcrypt");

const loginUser = async(req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    const foundUserFromEmail = await userModel.findOne({email: email}).populate("roleId")
    console.log(foundUserFromEmail);
    if(foundUserFromEmail != null){
        const isMatch = bcrypt.compareSync(password, foundUserFromEmail.password);

        if(isMatch == true) {
            res.status(200).json({
                message : "Login Succesfully done..",
                data : foundUserFromEmail,
            })
        } else {
            res.status(404).json({
                message: "invalid credentials....",
            })
        }
      } else{
        res.status(404).json({
            message: "email not found..",
        })
    }
}

const signup = async(req, res)=>{
    // for password encryption
    try{
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        req.body.password=hashedPassword;
        const createdUser = await userModel.create(req.body);
        res.status(201).json({
            message: "user created..",
            data: createdUser,
        });
    } catch (err){
        console.log(err)
        res.status(500).json({
            message: "error",
            data: err,
        })
    }
}

const getAllUsers = async (req, res)=>{
    
    const users = await userModel.find().populate("roleId")

    res.json({
        message: "role fetched successfully",
        data: users

    })
}

const addUser1  = async(req,res)=>{

    //try catch if else...
    try{

        const createdUser = await userModel.create(req.body)
        res.status(201).json({
            message:"user created..",
            data:createdUser
        })



    }catch(err){

        res.status(500).json({
            message:"error",
            data:err
        })
    }
}




const addUsers = async (req, res)=>{
    
    const savedUsers = await userModel.create(req.body)

    res.json({
        message: "role added",
        data: savedUsers

    })
}



const deleteUserByID = async (req, res)=>{
    
    const deletedUsers = await userModel.findByIdAndDelete(req.params.id)

    res.json({
        message: "role deleted ....",
        data: deletedUsers

    })
}




module.exports = {
    getAllUsers, addUsers ,addUser1, deleteUserByID, loginUser, signup
}