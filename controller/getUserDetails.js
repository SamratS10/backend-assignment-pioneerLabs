import UserSchema from "../model/userSchema.js"

const userDetails = async(req,res)=>{
    try{
        const id = req.user._id 
        const userDetails = await UserSchema.findById(id).select("-password");
        res.status(201).json({status:"success",message:userDetails})
    }
    catch(error){
        res.status(404).json({status:"fail",message:error.message})
    }
}

export default userDetails
