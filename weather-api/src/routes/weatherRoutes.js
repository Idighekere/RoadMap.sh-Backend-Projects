import express from "express"
import { fetchWeatherData } from "../services/weatherServices.js"
import ErrorResponse from "../utils/ErrorResponse.js"
import { catchAsync } from "../utils/catchAsync.js"


const weatherRouter = express.Router()

weatherRouter.get('/', catchAsync(async (req, res,next) => {

    // const { city } = req.params
    const { location } = req.query
    if (!location) {
        return next(new ErrorResponse('The location query parameter is required', 400))
    }
    const weatherData = await fetchWeatherData(location)


    if (!weatherData) {
        return next(new ErrorResponse("Couldn't fetch weather data", 404))
    }

    res.status(200).json({
        status: "success",
        data: weatherData
    })

}))
export default weatherRouter
