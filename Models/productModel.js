const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:[true,"Please enter the product name"],
        unique:true,
        trim:true
    },
    category:{
        type:String,
        required:[true,"Please enter the category"],
        trim:true
    },
    imageUrl:{
        type:String,
        required:[true,"Please add the image url"]
    },
    description:{
        type:String,
        required:[true,"Please add the product description"],
        trim:true
    }
})

const Product=mongoose.model("Products",productSchema)
module.exports=Product