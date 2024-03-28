import express from "express"
import authenticateUser from "../middleware/authUser.js"
import isAdmin from "../middleware/isAdmin.js"
import registeredUsers from "../controller/registeredUsers.js"

const registeredDataRouter = express.Router()

registeredDataRouter.get("/registered-users",authenticateUser,isAdmin,registeredUsers)

export default registeredDataRouter