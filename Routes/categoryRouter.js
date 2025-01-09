import {Router} from "express"
import { postCategory } from "../Controller/categoryController.js"
import { validateAdminId } from "../Middlewares/validateAdminId.js"

const categoryRouter = Router()

categoryRouter.post("/category", validateAdminId, postCategory)

export default categoryRouter