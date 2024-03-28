import express from "express"
import filterApiData from "../controller/getFetchedData.js"

const apiDataRouter = express.Router()

/**
 * @swagger
 * /api/data/api-data:
 *   get:
 *     summary: "Fetches the given API URL and saves in MongoDB database. Then you can filter the data by providing category, page, and limit as parameters in the URL."
 *     description: "Filtering and pagination are implemented to retrieve the data from MongoDB database."
 *     tags:
 *       - Api URL Filter and Pagination for Data Retrieval
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: "Filter data by category."
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: "Page number for pagination."
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: "Limit the number of items per page."
 *     responses:
 *       '200':
 *         description: "Retrieves the data from MongoDB database and allows filtering and pagination."
 *       "500":
 *         description: "Internal server error"
 */


apiDataRouter.get("/api-data",filterApiData)

export default apiDataRouter