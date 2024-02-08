const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")

const patientRouter=require("./controller/patientRouter")
const app=express()

mongoose.connect("mongodb+srv://anittamj24:anitta24@cluster0.8kj7aop.mongodb.net/patientDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/patient",patientRouter)

app.use(express.json)
app.use(cors())

app.listen(3001,()=>{
    console.log("server is running")
})