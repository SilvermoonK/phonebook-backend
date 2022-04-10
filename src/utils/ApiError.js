class ApiError  {
    constructor(status, message) {
        this.status = status
        this.message = message
    }

    static notFound(msg) {
        return new ApiError(404, msg)
    }

    static methodNotAllowed(msg) {
        return new ApiError(405, msg)
    }

    static badRequest(msg) {
        return new ApiError(400, msg)
    }
}

export default ApiError