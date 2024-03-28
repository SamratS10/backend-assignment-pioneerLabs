import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        trim:true,
        maxlength:20,
        required:[true,"Please Enter your Name"]
    },
    email:{
        type:String,
        trim:true,
        required:[true,"Please Enter your email"],
        unique:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Please Enter a valid Email address"]
    },
    password:{
        type:String,
        trim:true,
        required:[true,"Please Enter The Password"],
        minlength:6
    },
    role:{
        type:String,
        default:"user"
    }
},{timestamps:true})

const UserSchema = mongoose.model("user",userSchema) || mongoose.models.userSchema

export default UserSchema