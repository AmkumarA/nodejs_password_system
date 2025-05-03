import { ApiError } from '../utils/ApiError.js'
import { customeMessage } from '../utils/customeMessage.js'
import { jwtData } from '../utils/jwtUtils.js';
async function auth(req, res, next) {
    try {
        const authHeader = req?.headers?.authorization;
        if (!authHeader) {
            return res.json({
                message: customeMessage.error.unauthorized,
                status: customeMessage.status.failure
            })
        }
        const token = await authHeader.split(" ")[1];
        const tokenResult = await jwtData.verifyToken(token);
        if (tokenResult?.success != true) {
            return res.json({
                message: customeMessage.error.unauthorized,
                status: customeMessage.status.failure
            })
        }
        req.user = tokenResult.data
        next()

    } catch (error) {
        throw new ApiError(500, "auth middleware error", error)
    }
}
export default auth