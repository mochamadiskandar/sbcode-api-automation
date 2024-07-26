const request = require('supertest')
const { expect } = require('chai')

// asert using chai-json-schema
const chai = require('chai')
chai.use(require('chai-json-schema'))

const readJsonSchema = require('../../../helpers/readJsonSchemaHelper')

describe("User Login'", () => {
    const baseUrl = 'https://kasir-api.zelz.my.id'
    let accessToken

    it('Positive - Success Login and Get Token', async () => {
        const schema = readJsonSchema('auth', 'loginResponseSchema.json')

        const payload = {
            email: 'user32448@mail.com',
            password: 'P@ssw0rd',
        }

        const response = await request(baseUrl)
            .post('/authentications')
            .send(payload)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')

        accessToken = await response.body.data.accessToken
        console.log('🚀 ~ it ~ getToken:', accessToken)

        expect(response.status).to.equal(201)
        expect(response.body.status).to.equal('success')
        expect(response.body).to.be.jsonSchema(schema)
    })
})
