import "dotenv/config"
import ErrorResponse from "../utils/ErrorResponse.js"
import { ENVIRONMENT } from "../config/environment.js"

const productionErrors = (res, error) => {


    if (error.isOperational) {

        res.status(error.statusCode).json({
            status: error.status,
            message: error.message,
        })
    } else {
        res.status(500).json({
            status: 'fail',
            message: 'Something went Wrong',
        })
    }
}
const developmentErrors = (res, error) => {

    res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
        stackTrace: error.stack,
        error
    })

}

const validationErrorHandler = (err) => {


    let errMessages = []
    Object.values(err.errors).forEach((value) => {
        errMessages.push(value.message)
    })

    const msg = `Invalid input data:${errMessages.join('. ')}`

    console.log('Error', msg)
    return new ErrorResponse(msg, 400)

}

export const globalErrorHandler = (error, req, res, next) => {

    error.status = error.status || 'error'
    error.statusCode = error.statusCode || 500

    if (ENVIRONMENT.APP.ENV == 'development') {
        developmentErrors(res, error)
    } else if (ENVIRONMENT.APP.ENV == 'production') {


        if (error.name == 'ValidationError') {
            error = validationErrorHandler(error)
        }

        productionErrors(res, error)
    }

}
