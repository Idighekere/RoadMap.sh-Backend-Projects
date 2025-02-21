import app from "./app.js";
import mongoose from "mongoose";
import "dotenv/config";
import { connectToDb } from "./src/config/dbConnection.js";
import { ENVIRONMENT } from "./src/config/environment.js";


connectToDb()

const server = app.listen(ENVIRONMENT.APP.PORT, () => {
    console.log(`\t\t\n ENVIRONMENT: ${ENVIRONMENT.APP.ENV.toUpperCase()}\n`);

    console.log('✅ Server running at https://localhost/' + ENVIRONMENT.APP.PORT + '/...');
})

process.on('unhandledRejection', (err) => {

    console.error('UNHANDLED REJECTION => SHUTTING DOWN...')
    console.error(`❌${err.name}: ${err.message}`)

    server.close(() => {
        process.exit(1)
    })
})

process.on('uncaughtException', (err) => {

    console.error('UNCAUGHT EXCEPTION => SHUTTING DOWN')
    console.error(`❌${err.name}:${err.message}`)

    server.close(() => {
        process.exit(1)
    })
})
