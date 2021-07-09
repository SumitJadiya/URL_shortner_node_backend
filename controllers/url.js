const URL = require("../models/url")

// encodes the URL
exports.encodeUrl = (req, res) => {

    let longUrl = req.body.longString
    let encodedString = encodeToShortUrl(longUrl)

    if (!longUrl)
        throwError(res, "Please Enter Correct String")
    else {
        URL
            .findOrCreate({
                where: { longUrl: longUrl },
                defaults: { shortUrl: encodedString, longUrl: longUrl }
            }).then((msg) => res.status(200).json(msg))
    }
}

// check for custom string
exports.encodeUrlWithCustomString = (req, res) => {

    let longUrl = req.body.longString
    let shortUrl = req.body.shortString

    if (!shortUrl)
        this.encodeUrl(req, res)
    else if (!longUrl)
        throwError(res, "Please Enter Correct String")
    else
        findShortURL(shortUrl, longUrl, res)
}

// decodes the URL
exports.decodeUrl = (req, res) => {

    let shortUrl = req.params.shortString

    URL.findOne({ where: { shortUrl: shortUrl } })
        .then(function (result) {
            let decodedString = result.dataValues.longUrl
            return res.status(200).json({ decodedString })
        }).catch(function (error) {
            throwError(res, error)
        })
}

// algorithm to encode URL -> 64^9 unique strings
function encodeToShortUrl(longUrl) {

    const randomDigits = 'ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz0987654321';
    let len = randomDigits.length;

    let result = '';
    for (let i = 0; i < 9; i++)
        result += randomDigits[Math.floor(Math.random() * len)]; // generate short URL

    return result;
}

// check if short url available
async function findShortURL(shortUrl, longUrl, res) {
    const isPresent = await URL.findOne({ where: { shortUrl: shortUrl } })

    if (isPresent) return res.status(400).json({ "message": "Short String Already Present!" });
    else {
        URL
            .findOrCreate({
                where: { longUrl: longUrl, shortUrl: shortUrl },
                defaults: { shortUrl: shortUrl, longUrl: longUrl }
            }).then((msg) => res.status(200).json(msg))
    }
};

// custom exception method
const throwError = (res, message) => {
    return res.status(400).json({
        error: message
    })
}
