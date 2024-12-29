const { addcolorModel } = require("../../model/addColor");

let addColorController = async(req,res)=>{
    console.log(req.body)
    let obj={
        colorCode:req.body.colorCode,
        colorName:req.body.colorName,
        colorStatus:req.body.colorStatus
    }
    let resObj;
    try{
            let colorTable=new addcolorModel(obj)
            let colorRes=await colorTable.save()
            resObj={
                status:1,
                msg:"Color Added..",
                colorRes
            }
            res.send(resObj)
    }
    catch(error){
        resObj={
            status:0,
            msg:"Some Error",
            error
        }
        res.send(resObj)
    }
   
}


let viewColorController= async(req,res)=>{
    let colorData = await addcolorModel.find()
    let obj={
        status:1,
        data:colorData
    }
    res.status(200).json(obj)

}
module.exports={addColorController,viewColorController}