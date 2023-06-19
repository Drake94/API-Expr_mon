const { expect } = require('chai')
const app = require('../app')
const api = require('../routes/resultado')
const request = require('supertest')


describe('Prueba sobre api resultados', () => {

    describe('GET /admin/resultado', () => {

        it('La ruta funciona',async () =>{
            const response =request(api).get('/admin/resultado').send();
            expect((await response).statusCode).to.equal(200)
            expect(response.headers['content-type']).toContain('json');
        })

    } )
    
    describe('GET /admin/resultado/:_id', () => {

        it('La ruta funciona',async () =>{
            const response =request(app).get('/admin/resultado/').send();
            expect((await response).statusCode).to.equal(200)
            expect(response.headers['content-type']).toContain('json');
        })

    } )


    /*test("Deberia responder un codigo 200", async () => {
        const response = await request(app).get('/resultados').send()
        console.log(response.status)
        expect(response.status).equal(200)
    })*/
} )