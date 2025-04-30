import express from "express";
import { loginUser, userRegistraion } from "../../controller/user.controller.js";

const routes = express.Router();

routes.post('/userRegistration', userRegistraion);
routes.post('/userlogin', loginUser)

export { routes as userRoutes }