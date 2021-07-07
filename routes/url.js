const express = require('express');
const router = express.Router();
const { encodeUrl, decodeUrl } = require('../controllers/url')

router.post('/', encodeUrl);

router.get('/:shortString', decodeUrl);

module.exports = router