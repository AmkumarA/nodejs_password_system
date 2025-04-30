import { config as configDotenv } from "dotenv";

configDotenv()

const _envConfig = {
    DB_NAME: process.env.DB_NAME,
    USER_NAME: process.env.USER_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD
}

export const envConfig = Object.freeze(_envConfig) 