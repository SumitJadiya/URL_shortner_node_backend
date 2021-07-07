const URL = require("../models/url")

exports.encodeUrl = (req, res) => {

    let longUrl = req.params.longString
    let encodedString = encodeToShortUrl(longUrl)

    let url = new URL()
    url.longUrl = longUrl
    url.shortUrl = encodedString
    url.save()

    return res.status(200).json({ encodedString })
}

exports.decodeUrl = (req, res) => {

    console.log("hkjsahdkjahdkjahkjdhak")
    let shortUrl = req.params.shortString
    console.log(shortUrl)
    decodeToLongUrl(shortUrl).then(function (result) {
        let decodedString = result.dataValues.longUrl
        console.log("success", decodedString)
        return res.status(200).json({ decodedString })
    }).catch(function (error) {
        throwError(res, error)
    })
}

function encodeToShortUrl(longUrl) {

    const randomDigits = 'ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrstuvwxyz0987654321';
    let len = randomDigits.length;

    let result = '';
    for (let i = 0; i < 7; i++)
        result += randomDigits[Math.floor(Math.random() * len)];

    return result;
}

async function decodeToLongUrl(shortUrl) {
    return await URL.findOne({ where: { shortUrl: shortUrl } })
};

const throwError = (res, message) => {
    return res.status(400).json({
        error: message
    })
}
