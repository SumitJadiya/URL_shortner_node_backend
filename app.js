require("dotenv").config();

const mysql = require("mysql")
const express = require("express")
const cors = require('cors')
const app = express()
app.use(cors())

// port
const port = process.env.SERVER_PORT;

// connection to db
var connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DBDATABASE
});

connection.connect();

// APIs
app.get('/', (req, res) => {
    res.send('home')
})
app.get('/test', (req, res) => {
    res.send('test')
})

connection.end();

// server
app.listen(port, () => console.log(`Server Running at ${port}`))