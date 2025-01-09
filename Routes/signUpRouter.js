import { Router } from "express";
import { postUser } from "../Controller/signUpController.js";


const userRouter = Router();

userRouter.post("/signup", postUser)

export default userRouter;