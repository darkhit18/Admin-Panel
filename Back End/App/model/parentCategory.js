const {mongoose} = require("mongoose")
let categorySchema=new mongoose.Schema({
        categoryName:{
            type:String,
            unique:true,
        },
        categoryImage:String,
        categoryDescription:String,
        categoryStatus:{
            type:Boolean,
            default:true,
        }
},
            {timeStamp:true}
        
)

let categoryModel=mongoose.model("category",categorySchema)
module.exports={categoryModel}