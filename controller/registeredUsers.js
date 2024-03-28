import UserSchema from "../model/userSchema.js"

const registeredUsers = async(req,res)=>{
    try{
        const users = await UserSchema.find({}).select("-password")
        return res.status(200).json({users:users})
    }
    catch(error){
        res.status(400).json({message:error.message})
    }
}

export default registeredUsers