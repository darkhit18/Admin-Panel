let express= require("express")
const { adminRoute } = require("./routes/adminRoute")
// const { colorRoute } = require("./routes/admin/colorRouts")
let mainRoute=express.Router()

mainRoute.use("/admin",adminRoute)

module.exports={mainRoute}