import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import UserSchema from "../model/userSchema.js"

const userSignIn = async(req,res)=>{
    try{
        const {email,password} = req.body
        const findUser = await UserSchema.findOne({email})
        if(!findUser){
            return res.status(400).json({status:"fail",message:"email not exist please register"})
        }
        const comparePassword = await bcrypt.compare(password,findUser.password)
        if(!comparePassword){
            return res.status(400).json({status:"fail",message:"invalid password"})
        }
        const token = jwt.sign({userId:findUser._id},process.env.JWT_SECRET,{expiresIn:"1d"})
        res.cookie("jwtoken",token,{expires:new Date(Date.now() + 86400000) })
        return res.status(200).json({status:"success",message:"Logged in successful"})
    }
    catch(error){
        return res.status(501).json({message:error.messager})
    }
}

export default userSignIn