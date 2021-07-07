const express = require('express');
const router = express.Router();
const db = require('../config/database');
const URL = require('../models/url');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/test', (req, res) => res.send("Testpage"));

module.exports = router