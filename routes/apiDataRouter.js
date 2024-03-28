import express from "express"
import filterApiData from "../controller/getFetchedData.js"

const apiDataRouter = express.Router()

apiDataRouter.get("/api-data",filterApiData)

export default apiDataRouter