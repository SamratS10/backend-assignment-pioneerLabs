import jwt from "jsonwebtoken"
import UserSchema from "../model/userSchema.js"

const authenticateUser = async(req,res,next)=>{
    try{
        const token = req.cookies.jwtoken 
        if(!token){
            return res.status(401).json({status:"Fail",message:"Unauthorized - user is not logged in or cookie is invalid."})
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        req.user = await UserSchema.findById(decode.userId).select("-password")
        next()
    }
    catch(error){
        return res.status(500).json({meaasage:error.message})
    }
}

export default authenticateUser