import express from "express" 
import userDetails from "../controller/getUserDetails.js"
import authenticateUser from "../middleware/authUser.js"

const userDetailRouter = express.Router()

userDetailRouter.get("/user-details",authenticateUser,userDetails)

export default userDetailRouter