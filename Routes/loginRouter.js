import { Router } from "express";
import { postLogin } from "../Controller/loginController.js"

const loginRouter = Router();

loginRouter.post("/login", postLogin);

export default loginRouter;
