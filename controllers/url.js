const URL = require("../models/url")

// encodes the URL
exports.encodeUrl = (req, res) => {

    /*     
    if (!req.body.longString)
            throwError(res, "Please Enter Correct String")
     */

    let longUrl = req.body.longString
    let encodedString = encodeToShortUrl(longUrl)

    URL
        .findOrCreate({
            where: { longUrl: longUrl },
            defaults: { shortUrl: encodedString, longUrl: longUrl }
        }).then(function (msg) {
            return res.status(200).json(msg)
        })
}

// decodes the URL
exports.decodeUrl = (req, res) => {

    let shortUrl = req.params.shortString

    findShortURL(shortUrl).then(function (result) {
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

async function findShortURL(shortUrl) {
    return await URL.findOne({ where: { shortUrl: shortUrl } })
};

const throwError = (res, message) => {
    return res.status(400).json({
        error: message
    })
}
