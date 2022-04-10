import { DataTypes } from "sequelize/types";

//database
import db from './config/database'

const Users = db.define('Users', {
    //Model Attributes:
    email: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING
    }
})

export default Users