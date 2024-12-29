const {mongoose}=require("mongoose")
let colorSchema=new mongoose.Schema({
    colorCode:String,
    colorName:String,
    colorStatus:{
        type:Boolean,
        default:true,

    }
},
{
    timestamp:true
}
)

let addcolorModel=mongoose.model("color",colorSchema)

module.exports={addcolorModel}