const express = require('express');
const router = express.Router();
const db = require('../config/database');
const URL = require('../models/url');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { encodeUrl, decodeUrl } = require('../controllers/url')

router.post('/encode/:longString', encodeUrl);

router.post('/decode/:shortString', decodeUrl);

module.exports = router