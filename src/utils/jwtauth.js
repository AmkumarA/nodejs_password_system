
import JWT from "jsonwebtoken";
import { config } from '../config/config.js'
import { ApiError } from "./ApiError.js";
const jwtData = {
    async signToken(data, expireTime = "60000s", secret = config.JWT_TOKEN) {
        try {
            const token = JWT.sign(data, secret, {
                expiresIn: expireTime,
                algorithm: 'HS256'
            })
            return {
                success: true,
                token
            }
        } catch (error) {
            throw new ApiError(500, "JWT error", error)
        }
    },
    async verifyToken(token, secret = config.JWT_TOKEN) {
        try {
            if (!token) return { success: false, message: "Token is Required" }
            const data = await JWT.verify(token, secret)
            return { success: true, data }
        } catch (error) {
            throw new ApiError(500, "JWT Verify token error", error)
        }
    }
}
export { jwtData }