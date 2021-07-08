const expect = require('chai').expect;
const request = require('request');
const TESTING_URL = "http://localhost:5000"

describe('Encode URL API', () => {

    const payload = {
        longString: 'https://coggle.it/diagram/YOW9SsZ1oVzU-U2M/t/'
    }

    it('Status', done => {
        request.post(`${TESTING_URL}/`, {
            json: payload
        }, (_, response) => {

            expect(response.statusCode).to.equal(200)
            done()
        })
    })

    it('Result', done => {
        request.post(`${TESTING_URL}/`, {
            json: payload
        }, (_, response) => {

            expect(response.body[0].shortUrl).to.equal("ivnfDl0")
            done()
        })
    })

    describe('Check for duplicate URL API: ', () => {
        it('Duplicates', done => {
            request.post(`${TESTING_URL}/`, {
                json: payload
            }, (_, response) => {
                expect(response.body[1]).to.equal(false)
                done()
            })
        })
    })
})