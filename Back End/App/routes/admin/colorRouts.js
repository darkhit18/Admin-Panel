let express = require("express")
const {  viewColorController } = require("../../controller/admin/addColorController")
const {  addColorController } = require("../../controller/admin/addColorController")


let colorRoute =express.Router()

colorRoute.post("/add-color",addColorController)
colorRoute.get("/color-view",viewColorController)


module.exports={colorRoute}