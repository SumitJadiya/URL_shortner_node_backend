require("dotenv").config();
const Sequelize = require('sequelize');

module.exports = new Sequelize(process.env.DBDATABASE, process.env.DBUSER, process.env.DBPASSWORD, {
    host: process.env.DBHOST,
    dialect: 'mysql',
    operatorsAliases: 0,

    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});