const URL = require("../models/url")

exports.encodeUrl = (req, res) => {

    let longUrl = req.params.longString
    let encodedString = encodeShortUrl(longUrl)

    let url = new URL()
    url.longUrl = longUrl
    url.shortUrl = encodedString
    url.save()

    return res.status(200).json({ encodedString })
}

exports.decodeUrl = (req, res) => {

    // code to decode the url
}


function encodeShortUrl(longUrl) {

    const randomDigits = 'ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz0987654321';
    let len = randomDigits.length;

    let result = '';
    for (let i = 0; i < 7; i++)
        result += randomDigits[Math.floor(Math.random() * len)];

    return result;
}

var decodeShortUrl = function (shortUrl) {
    return map[shortUrl.split('com/')[1]];
};

const throwError = (res, message) => {
    return res.status(400).json({
        error: message
    })
}
