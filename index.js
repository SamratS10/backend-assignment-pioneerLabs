import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import connectMongoDb from "./connectDb/dbConnection.js"
import userRouter from "./routes/userRouter.js"
import fetchDataAndInsert from "./controller/fetchApiData.js"
import apiDataRouter from "./routes/apiDataRouter.js"
import userDetailRouter from "./routes/userDetailsRouter.js"
import registeredDataRouter from "./routes/registeredDataRouter.js"
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())
const port = process.env.PORT || 5002

app.listen(port,()=>console.log(`App is listening to port ${port}`))
connectMongoDb()

const options = {
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            version:'1.0.0',
            title:'Backend Api Documentation',
            description:'Pioneer labs backend api`s swagger documentation',
            contact:{
                name:'Samrat'
            },
            servers:["http:localhost:5001","https://backend-assignment-pioneerlabs.onrender.com"]
        },
        schemes:['http','https'],
    },
    apis:["./routes/*.js"]
}

const swaggerDocs = swaggerJSDoc(options)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs))

app.use("/api/user",userRouter)
app.use("/api/data",apiDataRouter)
app.use("/api/v1",userDetailRouter)
app.use("/api/v1/",registeredDataRouter)

fetchDataAndInsert()