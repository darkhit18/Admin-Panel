let express = require("express")
const { addSubcategory, parentCategory, subcategoryInsert } = require("../../controller/admin/subCategoryController")
const { uploads } = require("../../middleware/fileUploads")


let subCategoryRoute =express.Router()
subCategoryRoute.get("/parent-category",parentCategory)
subCategoryRoute.post("/insert",uploads('uploads/subCategory').single('subCategoryImage'),subcategoryInsert)
subCategoryRoute.post("/subcategoryinsert",subcategoryInsert)

module.exports={subCategoryRoute}

