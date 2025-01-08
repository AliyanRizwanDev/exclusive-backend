import { Router } from "express";
import { postSignUp } from "../Controller/signUpController.js";


const signUpRouter = Router();

signUpRouter.post("/signup", postSignUp)

export default signUpRouter;