const mongoose = require('mongoose');
const connection_string=process.env.MONGO_URL;
mongoose.connect(connection_string).then((res)=>{
    console.log("mongo connection successfully");
    
}).catch((err)=>{
    console.log(err);
    
})