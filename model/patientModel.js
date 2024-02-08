const mongoose=require("mongoose")

const patientSchema=new mongoose.Schema(
    {
        name:String,
        address:String,
        phonenumber:String,
        symthoms:String,
        status:String
    }
)

module.exports=mongoose.model("patient",patientSchema)