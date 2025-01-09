import {Router} from "express"
import { postAdminLogin } from "../Controller/adminLoginController.js";

const adminLoginRouter = Router();

adminLoginRouter.post("/adminLogin", postAdminLogin)



export default adminLoginRouter;
