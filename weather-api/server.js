import express from "express"
import cors from "cors"
import { ENVIRONMENT } from "./src/utils/environments.js"
import weatherRouter from "./src/routes/weatherRoutes.js"
import { globalErrorHandler } from "./src/middleware/errorHandlers.js"
import rateLimiter from "./src/middleware/rateLimiter.js"
import ErrorResponse from "./src/utils/ErrorResponse.js"


const app = express()

//Middlewares
app.use(cors())
app.use(express.json())
app.use(rateLimiter)

//Routes
app.use("/api/v1/weather",weatherRouter)

app.all("*",(req,res,next)=>{

    next(new ErrorResponse(`Can't find ${req.originalUrl} in the server`,404))
})

app.use(globalErrorHandler)

const PORT = ENVIRONMENT.APP.PORT
app.listen(PORT, ()=>{

    console.log(`✅ Server running at https://localhost:${PORT}`)
})
