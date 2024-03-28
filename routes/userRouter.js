import express from "express"
import userRegister from "../controller/register.js"
import userSignIn from "../controller/signIn.js"
import userSignOut from "../controller/signOut.js"


const userRouter = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           maxLength: 20
 *           description: "User name."
 *         email:
 *           type: string
 *           format: email
 *           description: "User email address."
 *         password:
 *           type: string
 *           minLength: 6
 *           description: "User password."
 *         role:
 *           type: string
 *           default: "user"
 *           description: "User's role. Defaults to 'user'."
 */

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: "Register a new user"
 *     description: "Registers a new user with the provided details."
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '200':
 *         description: "User successfully registered."
 *       '400':
 *         description: "Bad request - registration details are invalid."
 *       '401':
 *         description: "User already exist please login"
 *       '500':
 *         description: "Internal Server Error"
 */

/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: "User login"
 *     description: "Logs in a user with the provided credentials. A JSON Web Token (JWT) is generated upon successful login and stored in a cookie named 'token' for authentication."
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: "User email address."
 *               password:
 *                 type: string
 *                 minLength: 6
 *                 description: "User password."
 *     responses:
 *       '200':
 *         description: "User successfully logged in."
 *       '400':
 *         description: "Bad request - registration details are invalid."
 *       '401':
 *         description: "Unauthorized - invalid credentials."
 *       '500':
 *         description: "Internal Server Error"
 *     security:
 *       - cookieAuth: []
 * securitySchemes:
 *   cookieAuth:
 *     type: apiKey
 *     in: cookie
 *     name: "jwtoken"
 */

/**
 * @swagger
 * /api/user/logout:
 *   get:
 *     summary: "User logout"
 *     description: "Logs out the currently logged-in user."
 *     tags:
 *       - User
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       '200':
 *         description: "User successfully logged out."
 *       '401':
 *         description: "Unauthorized - user is not logged in."
 *       '500':
 *         description: "Internal Server Error"
 */


userRouter.post("/register",userRegister)
userRouter.post("/login",userSignIn)
userRouter.get("/logout",userSignOut)

export default userRouter
