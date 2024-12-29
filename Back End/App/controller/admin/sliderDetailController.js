const { sliderModel } = require("../../model/sliderDetailModel")

let sliderDetail = async(req,res)=>{
    console.log(req.body)
    let obj={
        sliderName:req.body.sliderName,
        sliderHeading:req.body.sliderHeading,
        sliderSubHeading:req.body.sliderSubHeading,
        sliderStatus:req.body.sliderStatus
    }
    if(req.file){
        if(req.file.filename){
            obj["sliderImage"]=req.file.filename
        }
    }
    let resObj
    try{
        let sliderTable = new sliderModel(obj)
        let sliderRes=await sliderTable.save()
        resObj={
            status:1,
            msg:"Data Saved",
            sliderRes
        }
        res.send(resObj)
    }
    catch(error){
        resObj={
            status:0,
            msg:"Some Error Occure",
            error
        }
        res.send(resObj)
    }
    // res.send("hh")
}

module.exports={sliderDetail}