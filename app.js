require("dotenv").config();

const express = require("express")
const cors = require('cors')
const app = express()

app.use(cors())

// route
const urlRoutes = require("./routes/url");

// port
const port = process.env.SERVER_PORT;

// Database
const db = require('./config/database');

// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))


// APIs
app.use('/', urlRoutes)

// connection.end();

// server
app.listen(port, () => console.log(`Server Running at ${port}`))