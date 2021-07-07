const { Sequelize } = require('sequelize');
const db = require('../config/database');

const URL = db.define('URL', {
    id: {
        primaryKey: true,
        type: Sequelize.STRING,
        allowNull: false
    },
    longUrl: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shortUrl: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

/* 
URL.sync().then(() => {
    console.log('table created');
});
*/
module.exports = URL;
