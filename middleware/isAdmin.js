import UserSchema from "../model/userSchema.js"

const isAdmin = async(req,res,next)=>{
    try{
        const {email} = req.user 
        const findUser = await UserSchema.findOne({email:email}).select("+password")
        if(!findUser){
            return res.status(401).json({message:"Unauthorized - user is not logged in or cookie is invalid."})
        }
        if(findUser.role!=="admin"){
            return res.status(403).json({message:"Forbidden - user is not authorized to access this resource."})
        }
        next()
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

export default isAdmin
