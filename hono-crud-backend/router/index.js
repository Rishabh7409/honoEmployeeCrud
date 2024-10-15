const express =require("express")
const router = express.Router()
const employee=require("./employee")

router.use( employee)


module.exports=router