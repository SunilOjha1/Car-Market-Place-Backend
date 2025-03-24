const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json()) // to accept data as json object

// import role routes
const roleRoutes = require("../internship node js/src/routes/RoleRoute")
app.use(roleRoutes)

const userRoutes = require("../internship node js/src/routes/UserRoute")
app.use(userRoutes)

const StateRoutes = require("../internship node js/src/routes/StateRoute")
app.use(StateRoutes)

const CityRoutes = require("../internship node js/src/routes/CityRoute")
app.use(CityRoutes)

const CarRoutes = require("../internship node js/src/routes/CarRoute")
app.use(CarRoutes)

const areaRoutes = require("../internship node js/src/routes/AreaRoute")
app.use(areaRoutes)

const insuranceRoutes = require("../internship node js/src/routes/InsuranceRoute")
app.use(insuranceRoutes)

mongoose.connect("mongodb://localhost:27017/sample").then(()=>{
    console.log("database created...")
    })


// const UserAge = require("./user")
// const UserName = require("./user")

// console.log("hello world")
// var x=require("./user")
// console.log(x.UserName)
// console.log(x.UserAge)
// console.log(x)


// const express = require("express")
// const app = express()

// app.get("/test", (req,res)=>{
//     console.log("test api called....")
//     res.send("hello test api called....")
// })


// app.get("/users", (req,res)=>{
//     console.log("test api called....")
//     res.json({
//         message: "users api called",
//         data:[ {
//             Name: "Sunil",
//             Age: "21"

//          }]
//     })
// })


// app.get("/Employees", (req, res)=>{
//     console.log("Employees api called.....")
//     res.json({
//         message: "Below is the Employees Api.....",
//         data:[
//         {
//             EID: "101",
//             EName: "Harshil",
//             EAge:"22",
//             EDomain: "MERN STACK",
//             EMobileno:"9020355856"

//         },
//         {
//             EID: "102",
//             EName: "Dhruv",
//             EAge:"21",
//             EDomain: "MERN STACK",
//             EMobileno:"8120355856"

//         },
//         {
//             EID: "103",
//             EName: "Laxman",
//             EAge:"22",
//             EDomain: "MERN STACK",
//             EMobileno:"8488202201"

//         },
//         {
//             EID: "104",
//             EName: "Lucky",
//             EAge:"22",
//             EDomain: "MERN STACK",
//             EMobileno:"8488202102"

//         }]

//     })
// })



const PORT = 3000
app.listen(PORT , ()=>{
    console.log("server started on port number", PORT)
})