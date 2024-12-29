let express = require("express")
const { uploads } = require("../../middleware/fileUploads")
const { addProductDetails } = require("../../controller/admin/productController")

let productRoute=express.Router()

productRoute.post("/add-product-details",uploads('upload/product').single('productDetailsImage'),addProductDetails)
module.exports={productRoute}