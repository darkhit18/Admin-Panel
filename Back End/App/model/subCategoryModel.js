const {mongoose} = require("mongoose")
let subcategorySchema=new mongoose.Schema({
        subcategoryName:{
            type:String,
            unique:true,
        },
        parentID:{
            type:mongoose.Schema.Types.ObjectID,
            ref:'category'
        },
        subcategoryImage:String,
        subcategoryDescription:String,
        subcategoryStatus:{
            type:Boolean,
            default:true,
        }
},
            {timeStamp:true}
        
)

let subcategoryModel=mongoose.model("subcategory",subcategorySchema)
module.exports={subcategoryModel}