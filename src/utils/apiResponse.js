class ApiResponse {
    constructor(statusCode, data, message = "successfully") {
        this.statusCode = statusCode,
            this.success = true,
            this.message = message,
            this.data = data
    }
}
export { ApiResponse }