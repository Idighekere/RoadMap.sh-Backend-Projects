class ErrorResponse extends Error {
    constructor(message, statusCode) {
        super(message)

        this.statusCode = statusCode

        this.status = statusCode.toString().startsWith('5') ? 'error' : 'fail'
        this.isOperational = true

        Error.captureStackTrace(this, this.constructor)

    }
}
export default ErrorResponse
