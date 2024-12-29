let express = require("express")
const { category, categoryInsert, categoryView, singleDelete, multipleDelete, editRowData, updateRow } = require("../../controller/admin/categoryController")
const { uploads } = require("../../middleware/fileUploads")
const { storyDetail } = require("../../controller/admin/storyDetailController")
const { sliderDetail } = require("../../controller/admin/sliderDetailController")
let categoryRoute=express.Router()

categoryRoute.post("/insert",uploads('uploads/category').single('categoryImage'),categoryInsert)
categoryRoute.get("/view",categoryView)
categoryRoute.delete("/delete/:id",singleDelete)
categoryRoute.post("/multiple-delete",multipleDelete)
categoryRoute.get("/edit-row/:id",editRowData)
categoryRoute.put("/update-row/:id",uploads('uploads/category').single('categoryImage'),updateRow)





categoryRoute.post("/story-detail",uploads('uploads/story').single('storyImage'),storyDetail)
categoryRoute.post("/slider-detail/:id",uploads('uploads/slider').single('sliderImage'),updateRow)

module.exports={categoryRoute}