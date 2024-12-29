const {mongoose}=require("mongoose")
let productDetailsSchema= mongooseSchema({
    porductDetailsName:{
        type:String,
        unique:null
    },
    productDetailsDescription:String,
    product
})