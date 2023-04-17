import dotenv from "dotenv";

dotenv.config();

const config = {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dbUrl: process.env.MONGO_DB,
    db: process.argv[2],
};

export default config;