require("dotenv").config();

const mysql = require("mysql")
const express = require("express")
const cors = require('cors')
const app = express()
app.use(cors())

// port
const port = process.env.SERVER_PORT;

// Database
const db = require('./config/database');

// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))


// APIs
app.get('/', (req, res) => {
    res.send('home')
})
app.get('/test', (req, res) => {
    res.send('test')
})

// connection.end();

// server
app.listen(port, () => console.log(`Server Running at ${port}`))