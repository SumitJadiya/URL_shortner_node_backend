require("dotenv").config();
const Sequelize = require('sequelize');

const cors = require('cors')
const express = require("express")
const app = express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

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
app.use('/dummy', (req, res) => res.send({ message: "Test is passed" }))

app.use('/', urlRoutes)

// server
app.listen(port, () => console.log(`Server Running at ${port}`))