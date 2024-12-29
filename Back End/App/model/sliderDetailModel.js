const {mongoose}=require("mongoose")
let sliderSchema=new mongoose.Schema({
    sliderName:{
        type:String,
        unique:true
    },
    sliderHeading:String,
    sliderSubHeading:String,
    sliderImage:String,
    sliderStatus:{
        type:Boolean,
        default:true
    }
},
{
    timeStame:true
}
)

let sliderModel=mongoose.model("slider",sliderSchema)

module.exports={sliderModel}



