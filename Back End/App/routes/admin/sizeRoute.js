let express = require("express")
const { addSizeController, viewSzeController } = require("../../controller/admin/SizeController")

let sizeRoute=express.Router()
sizeRoute.post("/add-size",addSizeController)
sizeRoute.get("/view-size",viewSzeController)



module.exports={sizeRoute}