import redisClient from "../config/redis.js"
import { ENVIRONMENT } from "../utils/environments.js"
import { filterWeatherData } from "../utils/weatherData.js"

const fetchWeatherData = async (city) => {

    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${ENVIRONMENT.WEATHER_SERVICE.API_KEY}&contentType=json`

    const fetchOptions = {
        method: 'GET'
    }

    const cacheExpiry = parseInt(ENVIRONMENT.REDIS.CACHE_EXPIRY)

    const cacheKey = `weather:${city.toLowerCase()}`

    const cachedWeatherData = await redisClient.get(cacheKey)

    if (cachedWeatherData) {
        return JSON.parse(cachedWeatherData)
    }

    try {
        const response = await fetch(apiUrl, fetchOptions)


        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()

        const weatherData = filterWeatherData(data)


        await redisClient.setEx(cacheKey, cacheExpiry, JSON.stringify(weatherData))

        return weatherData

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch weather data", error);


    }


}


export { fetchWeatherData }
