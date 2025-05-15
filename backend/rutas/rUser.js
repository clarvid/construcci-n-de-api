import {Router} from "express"
import cUser from "../controlador/cUser.js"

const routes = Router()

routes.post("/registro", cUser.createUser)
routes.post("/ingreso", cUser.signInUser)
routes.get("/usuarios", cUser.getUser)

export default routes