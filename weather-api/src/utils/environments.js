import "dotenv/config"


export const ENVIRONMENT={
    APP:{
        PORT: process.env.PORT,
ENVIRONMENT: process.env.NODE_ENV
    },
    REDIS:{
        USERNAME: process.env.REDIS_USERNAME,
        PASSWORD: process.env.REDIS_PASSWORD,
        HOST: process.env.REDIS_HOST,
        PORT: process.env.REDIS_PORT,
        CACHE_EXPIRY: process.env.CACHE_EXPIRY
    },
    WEATHER_SERVICE:{
        API_KEY:process.env.WEATHER_API_KEY
    }
}
