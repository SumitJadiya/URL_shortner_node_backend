require("dotenv").config();

const express = require("express")
const cors = require('cors')
const app = express()
app.use(cors())

// port
const port = process.env.DATABASE_PORT;

// APIs
app.get('/', (req, res) => {
    res.send('home')
})
app.get('/test', (req, res) => {
    res.send('test')
})

// server
app.listen(port, () => console.log(`Server Running at ${port}`))