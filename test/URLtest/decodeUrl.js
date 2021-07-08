const expect = require('chai').expect;
const request = require('request');
const TESTING_URL = "http://localhost:5000"

describe('Decode URL API :', () => {

    const shortUrl = 'ivnfDl0'

    it('Status', done => {
        request.get(`${TESTING_URL}/${shortUrl}`, (_, response) => {
            expect(response.statusCode).to.equal(200)
            done()
        })
    })

    it('Message', done => {
        request.get(`${TESTING_URL}/${shortUrl}`, (_, response) => {
            expect(JSON.parse(response.body).decodedString).to.equal("https://coggle.it/diagram/YOW9SsZ1oVzU-U2M/t/")
            done()
        })
    })
})