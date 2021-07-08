const expect = require('chai').expect;
const request = require('request');
const TESTING_URL = "http://localhost:5000"

describe('Status and content', () => {
  describe('Dummy GET', () => {
    it('status', done => {
      request(`${TESTING_URL}/dummy`, (req, res) => {

        expect(res.statusCode).to.equal(200)
        done()
      })
    })

    it('content', done => {
      request(`${TESTING_URL}/dummy`, (req, res) => {

        expect(JSON.parse(res.body).message).to.equal('Test is passed')
        done()
      })
    })
  })
})