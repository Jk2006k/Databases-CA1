const mongoose=require("mongoose")

const connectDB=async()=>{
    try{
        await mongoose.connect('mongodb+srv://kishoore004:Siva%405@jk.itech.mongodb.net/practice')
        console.log("Connected Successfully")
    }catch(error){
        console.log(error)
    }
}

module.exports=connectDB;