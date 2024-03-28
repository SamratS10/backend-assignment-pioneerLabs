import UserSchema from "../model/userSchema.js"

const isAdmin = async(req,res,next)=>{
    try{
        const {email} = req.user 
        const findUser = await UserSchema.findOne({email:email}).select("+password")
        if(!findUser){
            return res.status(401).json({message:"Please login"})
        }
        if(findUser.role!=="admin"){
            return res.status(400).json({message:"You are not allowed to process this task"})
        }
        next()
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

export default isAdmin
