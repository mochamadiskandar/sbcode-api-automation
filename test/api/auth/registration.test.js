const request = require('supertest')
const { expect } = require('chai')

// asert using chai-json-schema
const chai = require('chai')
chai.use(require('chai-json-schema'))

const randomId = require('../../../helpers/randomIdHelper')
const readJsonSchema = require('../../../helpers/readJsonSchemaHelper')

describe("Test suite for 'Authorization'", () => {
    const baseUrl = 'https://kasir-api.zelz.my.id'

    it('TC1 - POST/Users ', async () => {
        const randomName = `user${randomId(5)}`
        const randomEmail = `${randomName}@mail.com`
        const schema = readJsonSchema('auth', 'registrationResponseSchema.json')

        const payload = {
            name: randomName,
            email: randomEmail,
            password: 'P@ssw0rd',
        }

        const response = await request(baseUrl)
            .post('/registration')
            .send(payload)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')

        await console.log(response.body)
        expect(response.status).to.equal(201)
        expect(response.body.status).to.equal('success')
        expect(response.body).to.be.jsonSchema(schema)
    })
})
