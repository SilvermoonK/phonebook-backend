import express from "express";
import newUser from "../controllers/userController";
import methodNotAllowed from "../utils/notAllowedHandler";

const router = express.Router()

router.post('/', newUser) //Endpoint to create a new user after signup

router.all(methodNotAllowed)

export {router as userRouter}