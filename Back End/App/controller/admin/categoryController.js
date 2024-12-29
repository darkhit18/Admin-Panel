// const { categoryModel } = require("../../model/parentCategory")
// let fs = require("fs")

// let categoryInsert= async(req,res)=>{
//     console.log(req.body)
//     let obj={
//         categoryName:req.body.categoryName,
//         categoryDescription:req.body.categoryDescription,
//         categoryStatus:req.body.categoryStatus
//     }
//     if(req.file){
//         if(req.file.filename){
//             obj['categoryImage']=req.file.filename
//         }
//     }
//  //   console.log(obj)
// let resObj
//  try{
//         let categoryTable=new categoryModel(obj)
//         let cateRes=await categoryTable.save()
//         resObj={
//             status:1,
//             msg:"Data SAved...",
//             cateRes
//         }
//         res.send(resObj)
//  }
//  catch(error){
//     resObj={
//         status:0,
//             msg:"Error Occure",
//             error
//     }
//     res.send(resObj)
//  }
    
// }

// let categoryView=async(req,res)=>{
//     let categoryData = await categoryModel.find()
//     let obj={
//         status:1,
//         path:"http://localhost:8000/uploads/category/",
//         data:categoryData
//     }
//     res.status(200).json(obj)
// }


// let singleDelete= async(req,res)=>{
//    // console.log(req.params)
//     let id = req.params.id;
//     let data = await categoryModel.findOne({_id:id})
//     if (data){
//      //   console.log(data)
//         let imageName = data.categoryImage;
//         let path = "uploads/category/"+imageName;
//         fs.unlinkSync(path)
//         let deleteRes = await categoryModel.deleteOne({_id:id});
    
//     let obj = {
//         status:1,
//         msg:"Delete Successfully..",
//         deleteRes
//     }
//     res.send(obj)
// }
// }

// let multipleDelete=async(req,res)=>{
//     let {ids}=req.body;
//     for(let id of ids){
//         let data = await categoryModel.findOne({_id:id})
//         if (data){
//          //   console.log(data)
//             let imageName = data.categoryImage;
//             let path = "uploads/category/"+imageName;
//             fs.unlinkSync(path)
//             let deleteRes = await categoryModel.deleteOne({_id:id});
//     }
//     }
//     let obj = {
//         status:1,
//         msg:"Delete Successfully..",
        
//     }
//     res.send(obj)
// }
// module.exports={categoryInsert,categoryView,singleDelete,multipleDelete}


const { categoryModel } = require("../../model/parentCategory");
let fs = require("fs");

// Insert category
let categoryInsert = async (req, res) => {
    console.log(req.body);
    
    let obj = {
        categoryName: req.body.categoryName,
        categoryDescription: req.body.categoryDescription,
        categoryStatus: req.body.categoryStatus
    };

    // If a file is uploaded, add the filename to the object
    if (req.file && req.file.filename) {
        obj['categoryImage'] = req.file.filename;
    }

    let resObj;
    try {
        let categoryTable = new categoryModel(obj);
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
};

// View all categories
let categoryView = async (req, res) => {

    // search wala kaam bhi yhi karenge bs obj ko send kar denge
    let limit=2
    let searchObj={}
    let {catName,catDesc,pageNumber}=req.query
    console.log(catDesc)
    if(catName!==''){
        searchObj['categoryName']= new RegExp(catName,'i') 
    }
    if(catDesc!==''){
        searchObj['categoryDescription']= catDesc //new RegExp (catDesc,'i')
    }
    let categoryData = await categoryModel.find(searchObj).skip(limit*(pageNumber-1)).limit(limit);
    let totalPage = await categoryModel.find(searchObj)
    let allPage =  Math.ceil(totalPage.length/limit)
    let obj = {
        status: 1,
        path: "http://localhost:8000/uploads/category/",
        data: categoryData,
        allPage,
        limit
    };
    res.status(200).json(obj);
};

// Single category delete
let singleDelete = async (req, res) => {
    let id = req.params.id;
    let data = await categoryModel.findOne({ _id: id });

    if (data) {
        let imageName = data.categoryImage;
        let path = "uploads/category/" + imageName;
        
        // Delete the image file from the server
        if (fs.existsSync(path)) {
            fs.unlinkSync(path);
        }

        // Delete the category from the database
        let deleteRes = await categoryModel.deleteOne({ _id: id });

        let obj = {
            status: 1,
            msg: "Deleted Successfully",
            deleteRes
        };
        res.send(obj);
    }
};

// Multiple categories delete
let multipleDelete = async (req, res) => {
    let { ids } = req.body;

    for (let id of ids) {
        let data = await categoryModel.findOne({ _id: id });
        if (data) {
            let imageName = data.categoryImage;
            let path = "uploads/category/" + imageName;

            // Delete each image file from the server
            if (fs.existsSync(path)) {
                fs.unlinkSync(path);
            }

            // Delete each category from the database
            await categoryModel.deleteOne({ _id: id });
        }
    }

    let obj = {
        status: 1,
        msg: "Deleted Successfully"
    };
    res.send(obj);
};


let editRowData=async(req,res)=>{
    let id=req.params.id
    let data=await categoryModel.findOne({_id:id})
    let obj={
        status:1,
        path:'http://localhost:8000/uploads/category/',
        data
    }
    res.send(obj)
}

let updateRow=async(req,res)=>{
    let id=req.params.id
    let obj = {
        categoryName: req.body.categoryName,
        categoryDescription: req.body.categoryDescription,
        categoryStatus: req.body.categoryStatus
    };

    // If a file is uploaded, add the filename to the object
    if (req.file && req.file.filename) {
        obj['categoryImage'] = req.file.filename;
    }

  let updateData = await categoryModel.updateOne({_id:id},{$set:obj})
  let resObj={
    status:1,
    msh:"Updated..",
    updateData
  }
  res.send(resObj)
}
module.exports = { categoryInsert, categoryView, singleDelete, multipleDelete,editRowData,updateRow };
