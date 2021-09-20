/// <reference types="Cypress" />

describe('Test Suit 2 API TEST', function () {

    beforeEach(function () {
        cy.fixture('dataForAPITest').then(function (data) {
            this.data = data
        })
    })

    it('POST API Test', function () {
        cy.request('POST', Cypress.env('apiURL') + '/api/users', {
            "name": this.data.createdName,
            "job": this.data.createdJob
        }).then(function (response) {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property("name", this.data.createdName)
            expect(response.body).to.have.property("job", this.data.createdJob)
            expect(response.body).property('id').to.be.a('string')
        })
    })

    it('GET API Test', function () {
        cy.request('GET', Cypress.env('apiURL') + '/api/users?page=2').then(function (response) {
            expect(response.status).to.eq(200)
            expect(response).property('body').to.contain({
                "page": 2,
                "per_page": 6,
                "total": 12,
                "total_pages": 2,
            })
            expect(response.body.data[0].email).equal('michael.lawson@reqres.in')
            expect(response.body.data[0].first_name).equal('Michael')
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(6)
        })
    })

    it('PUT API Test', function () {
        cy.request('PUT', Cypress.env('apiURL') + '/api/users/2', {
            "name": this.data.updatedName,
            "job": this.data.updatedJob 
        }).then(function (response) {
            expect(response.status).to.eq(200)
            expect(response.body.name).equal(this.data.updatedName)
            expect(response.body.job).equal(this.data.updatedJob)
        })
    })

    it('DELETE API Test', function () {
        cy.request('DELETE', Cypress.env('apiURL') + '/api/users/3').then(function (response) {
            expect(response.status).to.eq(204)
        })
    })
    
})