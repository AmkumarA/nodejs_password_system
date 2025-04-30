import { userRoutes } from "./user_routes/user.routes.js";

function routes(app) {
    app.use(userRoutes)
}
export default routes