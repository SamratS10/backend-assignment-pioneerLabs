import express from "express"
import authenticateUser from "../middleware/authUser.js"
import isAdmin from "../middleware/isAdmin.js"
import registeredUsers from "../controller/registeredUsers.js"

const registeredDataRouter = express.Router()

/**
 * @swagger
 * /api/v1/registered-users:
 *   get:
 *     summary: "Get all registered users"
 *     description: "Returns a list of all registered users if the logged-in user is an admin."
 *     tags:
 *       - Registered Users
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       '200':
 *         description: "Returns a list of registered users."
 *       '401':
 *         description: "Unauthorized - user is not logged in or cookie is invalid."
 *       '403':
 *         description: "Forbidden - user is not authorized to access this resource."
 *       "500":
 *         description:"Internal Server Error"
 */

registeredDataRouter.get("/registered-users",authenticateUser,isAdmin,registeredUsers)

export default registeredDataRouter