const roleModel = require("../models/RoleModel")

// select * from roleModel


const getAllRoles = async (req, res) => {

    const roles = await roleModel.find()

    res.json({
        message: "role fetched successfully",
        data: roles

    })
}

const addRole = async (req, res) => {

    const savedRole = await roleModel.create(req.body)

    res.json({
        message: "role created...",
        data:"savedRole"
    })
}

const deleteRole = async (req, res)=>{
    const deletedRole = await roleModel.findByIdAndDelete(req.params.id)

    res.json({
        message: "role deleted successsfully..",
        data: "deletedRole"
    })
}

const getRoleByID = async (req, res)=>{
    const foundRole = await roleModel.findById(req.params.id)

    res.json({
        message:"role found succesfully..",
        data: "foundRole"
    })
}



module.exports = {
    getAllRoles,addRole,deleteRole,getRoleByID
}