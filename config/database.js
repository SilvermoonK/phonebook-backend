import { Sequelize } from "sequelize/types";

//Connecting to database

const db = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USERNAME, 
    process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'postgres'
});

export default db