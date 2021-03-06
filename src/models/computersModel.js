const { DataTypes } = require('sequelize');

const sequelize = require('../db/sequelize');

const Computer = sequelize.define('computer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    manufacturer: {
        type: DataTypes.STRING
    },
    model: {
        type: DataTypes.STRING
    },
    cpu: {
        type: DataTypes.STRING
    },
    ram: {
        type: DataTypes.INTEGER
    },
    disk: {
        type: DataTypes.INTEGER
    },
    price: {
        type: DataTypes.FLOAT
    }
});

module.exports = Computer;