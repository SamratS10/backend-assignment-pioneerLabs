import mongoose from "mongoose"
const connectMongoDb = async()=>{
    try{
        const connectDb = await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to MONGODB")
    }
    catch(error){

        console.log(error.message)
    }
}

export default connectMongoDb
