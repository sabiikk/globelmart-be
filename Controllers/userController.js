const users= require('../Models/userModel')

//register
exports.registerController = async(req,res)=>{
    try{
        console.log("inside register controller");
        res.status(201).json("succesfullyy created")
        
    }
    catch (err){
        res.status(401).json(err)
    }
}