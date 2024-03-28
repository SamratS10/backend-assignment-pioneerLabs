import jwt from "jsonwebtoken"
import UserSchema from "../model/userSchema.js"

const authenticateUser = async(req,res,next)=>{
    try{
        const token = req.cookies.jwtoken 
        if(!token){
            return res.status(401).json({status:"Fail",message:"Please login"})
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        req.user = await UserSchema.findById(decode.userId).select("-password")
        next()
    }
    catch(error){
        return res.status(400).json({meaasage:error.message})
    }
}

export default authenticateUser