require("dotenv").config();

const express = require("express")

const app = express()
app.use(express.json({ extended: false }))


const port = process.env.DATABASE_PORT;

app.listen(port, () => console.log(`Server Running at ${port}`))