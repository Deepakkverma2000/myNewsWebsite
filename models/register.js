const mongoose=require("mongoose");
const NewsUser= new mongoose.Schema({
    firstname:{
        type:String,
    required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
      type:String,
      required:true
    },
    confirmpassword:{
      type:String,
      required:true
    },
  },
    {
      timestamps:true
    }
)

//now we need to define a collection
const Register=new mongoose.model("Register",NewsUser);
module.exports=Register;