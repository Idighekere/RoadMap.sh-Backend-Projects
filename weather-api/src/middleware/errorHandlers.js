import { ENVIRONMENT } from "../utils/environments.js"


const developmentErrorHandler=(res,error)=>{


    res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
        stackTrace: error.stack,
        error,
    })
}

const productionErrorHandler=(res,error)=>{

    if(error.isOperational) {
        res.status(error.statusCode).json({
            status:error.status,
            message: error.message
        })
    } else {
        res.status(500).json({
            status: "error",
            message: 'Something went wrong'
        })
    }
}
export const globalErrorHandler =(error,req,res,next)=>{


    error.status= error.status || 'error'
    error.statusCode= error.statusCode || 500

    if(ENVIRONMENT.APP.ENVIRONMENT==='development'){
developmentErrorHandler(res,error)
    } else if (ENVIRONMENT.APP.ENVIRONMENT==='production'){

        productionErrorHandler(res,error)
    }
}
