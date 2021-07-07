const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const URL = sequelize.define('URL', {

    id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    longUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    shortUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },

}, {

});

console.log(URL === sequelize.models.URL); // true
