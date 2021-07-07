const express = require('express');
const router = express.Router();
const db = require('../config/database');
const URL = require('../models/url');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { encodeUrl, decodeUrl } = require('../controllers/url')

router.post('/:longString', encodeUrl);

router.get('/:shortString', decodeUrl);

module.exports = router