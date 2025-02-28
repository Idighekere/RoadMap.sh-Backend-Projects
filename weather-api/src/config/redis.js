import { createClient } from "redis";
import { ENVIRONMENT } from "../utils/environments.js";

const redisClient = createClient({
    username: ENVIRONMENT.REDIS.USERNAME,
    password: ENVIRONMENT.REDIS.PASSWORD,
    socket: {
        host: ENVIRONMENT.REDIS.HOST,
        port: ENVIRONMENT.REDIS.PORT
    }
});

redisClient.on('error', err => console.log('Redis Client Error', err));


(async () => {
    await redisClient.connect();
    console.log("✅ Redis connected successfully");
})()

export default redisClient;
