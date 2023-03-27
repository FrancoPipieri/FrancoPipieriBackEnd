const config = {
    client: "mysql",
    connection: {
        host: process.env.DB_HOST || "localhost",
        port: process.env.DB_PORT || "3000",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "mibase",
    },
    pool: { min: 0, max: 7 },
};

export default config;