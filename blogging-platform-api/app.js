import express from "express"
import morgan from "morgan"
import "dotenv/config";
import postRouter from "./src/routes/postRoutes.js";
import { globalErrorHandler } from "./src/middlewares/errorHandlers.js";
import ErrorResponse from "./src/utils/ErrorResponse.js";
import { ENVIRONMENT } from "./src/config/environment.js";

const app = express()

//Logger
if (ENVIRONMENT.APP.ENV == 'development') {

    app.use(morgan('dev'))
}

app.use(express.json({ limit: '10mb' }))

//Routes
app.use("/api/v1/posts/", postRouter)


app.all("*", (req, res, next) => {

    const err = new ErrorResponse(`Can't find ${req.originalUrl} in the server`, 404)
    next(err)
})

//Global error middleware
app.use(globalErrorHandler)


export default app
