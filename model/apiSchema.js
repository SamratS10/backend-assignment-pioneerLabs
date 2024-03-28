import mongoose,{Schema} from "mongoose";

const apiSchema = new Schema({
    API:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
    Auth:{
        type:String
    },
    HTTPS:{
        type:Boolean,
        required:true
    },
    Cors:{
        type:String,
        required:true
    },
    Link:{
        type:String,
        required:true
    },
    Category:{
        type:String,
        required:true
    }
},{timestamps:true})

const ApiDataModel = mongoose.model("apiData",apiSchema) || mongoose.models.apiSchema

export default ApiDataModel