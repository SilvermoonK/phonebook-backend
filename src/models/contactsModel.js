import { DataTypes } from "sequelize/types";

//database
import db from './config/database'

const Contacts = db.define('Contacts', {
    //Model Attributes:
    ID: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        isNumeric: true
    },
    addressLines: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    }
}, {
    freezeTableName: true
});

export default Contacts