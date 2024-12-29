let express = require("express")
const { categoryRoute } = require("./admin/categoryRoute")
const { colorRoute } = require("./admin/colorRouts")

const { subCategoryRoute } = require("./admin/subCategoryRoute")
const { sizeRoute } = require("./admin/sizeRoute")
const { productRoute } = require("./admin/productRout")
let adminRoute= express.Router()

adminRoute.use("/category",categoryRoute)
adminRoute.use("/color",colorRoute)
adminRoute.use("/size",sizeRoute)
adminRoute.use("/product",productRoute)
adminRoute.use("/subcategory",subCategoryRoute)


module.exports={adminRoute}