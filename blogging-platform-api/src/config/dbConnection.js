import "dotenv/config"
import mongoose from "mongoose"
import { ENVIRONMENT } from "./environment.js";


export const connectToDb = async () => {

    let STRING;
    // STRING = process.env.DB_CONNECTION_STRING
    // STRING = process.env.LOCAL_STRING
    try {
        const connection = await mongoose.connect(ENVIRONMENT.DB.URL)
        console.log(`✅ MongoDB Connected: ${connection.connection.host} `);

    } catch (error) {
        console.error(error.message);
        process.exit(1);

    }
}
