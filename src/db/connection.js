import { Sequelize } from "sequelize";
import { envConfig } from './envConfig.js'



const sequilize = new Sequelize(envConfig.DB_NAME, envConfig.USER_NAME, envConfig.DB_PASSWORD, {
    dialect: "mysql",
    host: 'localhost',
    port: 3306,
    timezone: '+5:30',
    logging: (query) => {
        console.log("query is", query)
    },
    logQueryParameters: true,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: true,
        freezeTableName: true,
        freezeTableName: true
    }
})

const dbConnection = async () => {
    try {
        await sequilize.authenticate();
        console.log("Data base is connected!!")
    } catch (error) {
        console.log("error connection while connecting database", error)
    }
}
export { dbConnection, sequilize }