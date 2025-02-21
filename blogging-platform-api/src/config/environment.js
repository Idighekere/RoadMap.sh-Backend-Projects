
export const ENVIRONMENT = {

    APP: {
        ENV: process.env.NODE_ENV,
        PORT: process.env.PORT || 5000,

    },
    DB: {
        URL: process.env.DB_CONNECTION_STRING || process.env.LOCAL_STRING,
        PASSWORD: process.env.MONGO_PWD,
        USER: process.env.MONGO_USER
    }
}
