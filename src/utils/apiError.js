class ApiError {
    constructor(
        statusCode,
        message = "something went wrong!!",
        errors = [],
        stack = "") {
        this.statusCode = statusCode
        this.success = false
        this.data = null
        this.message = message
        this.errors = errors
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
export { ApiError }