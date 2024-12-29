
let fs = require("fs");
const { subcategoryModel } = require("../../model/subCategoryModel");
const { categoryModel } = require("../../model/parentCategory");

let subcategoryInsert= async(req,res)=>{
    // console.log(req.body)
    // console.log(req.file)
    let obj = {
        subcategoryName: req.body.subCategoryName,
        parentCatId:req.body.parentCatId,
        subcategoryDescription: req.body.subCategoryDescription,
        subcategoryStatus: req.body.subCategoryStatus
    };

    // If a file is uploaded, add the filename to the object
    if (req.file && req.file.filename) {
        obj['subcategoryImage'] = req.file.filename;
    }

    let resObj;
    try {
        let categoryTable = new subcategoryModel(obj);
        let cateRes = await categoryTable.save();
        resObj = {
            status: 1,
            msg: "Data Saved...",
            cateRes
        };
        res.send(resObj);
    } catch (error) {
        resObj = {
            status: 0,
            msg: "Error Occurred",
            error
        };
        res.send(resObj);
    }
}

let parentCategory=async(req,res)=>{
    let data = await categoryModel.find({categoryStatus:1})
    let obj={
        status:1,
        data
    }
    res.send(obj)
}
module.exports={subcategoryInsert,parentCategory}