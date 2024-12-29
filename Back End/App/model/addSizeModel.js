const {mongoose} = require("mongoose")
let addSizeSchema=new mongoose.Schema({
    sizeName:{
        type:String,
        unique:true,
    },
    sizeStatus:{
        type:Boolean,
        default:true
    }
},
{
    timeStamp:true
}

)
let addSizeModel = mongoose.model("size",addSizeSchema)
module.exports={addSizeModel}