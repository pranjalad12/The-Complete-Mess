const mongoose = require("mongoose");
const DB = 'mongodb+srv://Project:project@cluster0.4xfiw.mongodb.net/themess?retryWrites=true&w=majority'
mongoose.connect(DB).then(()=>{
    console.log("connection successful");
}).catch((err)=>console.error(err));

