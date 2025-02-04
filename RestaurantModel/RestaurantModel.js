const mongoose=require('mongoose')


const Item=require('./itemsModels')

const restaurentSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    itemsArr:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:Item
    }]
})

module.exports=mongoose.model("Restaurant",restaurentSchema);
