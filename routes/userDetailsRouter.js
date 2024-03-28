import express from "express" 
import userDetails from "../controller/getUserDetails.js"
import authenticateUser from "../middleware/authUser.js"

const userDetailRouter = express.Router()

/**
 * @swagger
 * /api/v1/user-details:
 *   get:
 *     summary: "Get user details"
 *     description: "Returns details of the logged-in user."
 *     tags:
 *       - User Details
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       '200':
 *         description: "Returns user details."
 *       '401':
 *         description: "Unauthorized - user is not logged in or cookie is invalid."
 *       "500":
 *         description:"Internal Server Error"
 */

userDetailRouter.get("/user-details",authenticateUser,userDetails)

export default userDetailRouter