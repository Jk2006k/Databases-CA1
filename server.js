const express=require('express')
const app= express()
const connectDB=require('./config/db')

const PORT=3000;


app.get('/',(req,res)=>{
    res.status(200).send("Server is running")

})
app.listen(PORT,()=>{
    try{
        connectDB();
        console.log(`Server is running in ${PORT}`)
    }catch(error){
        console.log(error)
    }
    
})
