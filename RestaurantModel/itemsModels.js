const mongoose=require('mongoose')

const itemsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
})

module.exports=mongoose.model("Items",itemsSchema);