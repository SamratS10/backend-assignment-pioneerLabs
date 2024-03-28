import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import connectMongoDb from "./connectDb/dbConnection.js"
import userRouter from "./router/userRouter.js"
import fetchDataAndInsert from "./controller/fetchApiData.js"
import apiDataRouter from "./router/apiDataRouter.js"
import userDetailRouter from "./router/userDetailsRouter.js"
import registeredDataRouter from "./router/registeredDataRouter.js"
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
const port = process.env.PORT || 5002

app.listen(port,()=>console.log(`App is listening to port ${port}`))
connectMongoDb()

app.use("/api/user",userRouter)
app.use("/api/data",apiDataRouter)
app.use("/api/v1",userDetailRouter)
app.use("/api/v1/",registeredDataRouter)

fetchDataAndInsert()