import express from "express"
import userRegister from "../controller/register.js"
import userSignIn from "../controller/signIn.js"
import userSignOut from "../controller/signOut.js"


const userRouter = express.Router()

userRouter.post("/register",userRegister)
userRouter.post("/login",userSignIn)
userRouter.get("/logout",userSignOut)

export default userRouter
