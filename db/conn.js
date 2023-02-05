const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/NewsUser").then(()=>{
    console.log("Connection succsess ful");
}).catch((e)=>{
   console.log("No Connection");
})
