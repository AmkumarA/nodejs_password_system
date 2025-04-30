import express from "express";
import { loginUser, updateUserPassword, userRegistraion } from "../../controller/user.controller.js";

const routes = express.Router();

routes.post('/userRegistration', userRegistraion);
routes.post('/userlogin', loginUser);
routes.put('/updateUserdetails', updateUserPassword)

export { routes as userRoutes }