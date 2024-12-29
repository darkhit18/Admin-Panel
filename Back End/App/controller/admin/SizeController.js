const { addSizeModel } = require("../../model/addSizeModel")

let addSizeController=async(req,res)=>{
    
    console.log(req.body)
    let obj={
        sizeName:req.body.sizeName,
        sizeStatus:req.body.sizeStatus,
    }

    let resObj
    
    try{
        let sizetable = new addSizeModel(obj)
        let sizeRes=await sizetable.save()
        resObj={
            status:1,
            msg:true,
            sizeRes
        }
        res.send(resObj)
    }
    catch(error){
        resObj={
            status:0,
            msg:"Error Occure",
            error
        }
        res.send(resObj)
    }
}


let viewSzeController=async(req,res)=>{
    let viewSizeData=await addSizeModel.find()
    let obj={
        status:1,
        data:viewSizeData
    }
    res.status(200).json(obj)
}
module.exports={addSizeController,viewSzeController}