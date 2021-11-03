/// <reference types="Cypress" />

describe('Test Suit 1 Web Automation', function () {

    beforeEach(function () {
        cy.fixture('test1/data').then(function (data) {
            this.data = data
        })
    })

    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.log("this case failed. Please check.")
        }
    });

    it('Test Case 1: Sign Up', function () {

        cy.visit(Cypress.env('url'));
        cy.clickSignIn()
        cy.signUp(this.data.email, this.data.password)
        cy.checkEmailAfterSignUp(this.data.email)
    })
    
    it('Test Case 2: Create a new address and verify that the correct details are shown on the list ', function () {
        cy.visit(Cypress.env('url'));
        cy.clickSignIn()
        cy.signIn(this.data.email, this.data.password)

        //create a new address
        cy.clickAddress()
        cy.clickNewAddress()
        cy.fill_address_data(this.data)
        cy.clickCreateAddressButton()

        // click the List button
        cy.clickListAfterSavedAddress()

        //check table list details
        const expectedData = {
            "First name": this.data.firstName,
            "Last name": this.data.lastName,
            "City": this.data.city,
            "State": this.data.state
        }
        cy.get('table').getTable({ onlyColumns: Object.keys(expectedData) }).should(tableData => {
            expect(tableData).to.deep.include(expectedData)
        })
    })
    
    // it('Test Case 3: edit address and check details', function () {
    //     cy.visit(Cypress.env('url'));
    //     cy.clickSignIn()
    //     cy.signIn(this.data.email, this.data.password)

    //     cy.clickAddress()

    //     cy.clickEditAddress()
    //     cy.check_address_data(this.data)

    // })

    // it('Test Case 4: Update address details and check details', function () {
    //     cy.visit(Cypress.env('url'));
    //     cy.clickSignIn()
    //     cy.signIn(this.data.email, this.data.password)

    //     cy.clickAddress()

    //     cy.clickEditAddress()

    //     cy.update_address_data(this.data)
    //     cy.update_address_button_click()

    //     // click the List button
    //     cy.clickListAfterSavedAddress()


    //     const expectedData1 = {
    //         "First name": this.data.updatedName,
    //         "Last name": this.data.lastName,
    //         "City": this.data.city,
    //         "State": this.data.newState
    //     }
    //     cy.get('table').last().getTable({ onlyColumns: Object.keys(expectedData1) }).should(tableData => {
    //         expect(tableData).to.deep.include(expectedData1)
    //     })

    // })

    // it('Test Case 5: create a new address without a First name and Zip code', function () {
    //     cy.visit(Cypress.env('url'));
    //     cy.clickSignIn()
    //     cy.signIn(this.data.email, this.data.password)

    //     cy.clickAddress()
    //     cy.clickNewAddress()

    //     // fill empty first and zip code
    //     cy.fill_address_data_without_firstnameAndzipcode(this.data)

    //     cy.clickCreateAddressButton()

    //     cy.check_visibity_Empty_FirstName_Error_Msg(this.data)
    //     cy.check_visibity_Empty_ZipCode_Error_Msg(this.data)
    //     cy.log("Empty Zipcode and firstName Error displayed.")

    //     //correct the address error
    //     cy.log("Correct the Error.")
    //     cy.correct_the_address_error(this.data)
    //     cy.clickCreateAddressButton()
    //     cy.log("Correction done. Should be able to create a new address successfully.")
    // })

    // it('Test Case 6: check that the list contains the correct number of addresses', function () {
    //     cy.visit(Cypress.env('url'));
    //     cy.clickSignIn()
    //     cy.signIn(this.data.email, this.data.password)

    //     cy.clickAddress()
    //     var expectedRowLength = 2;
    //     cy.check_table_row_length(expectedRowLength)
    // })

    // it('Bouns Test Case: confirm there are three addresses in the list when in fact there are two', function () {
    //     cy.visit(Cypress.env('url'));
    //     cy.clickSignIn()
    //     cy.signIn(this.data.email, this.data.password)

    //     cy.clickAddress()
    //     cy.get('.table').find('tbody tr').should('have.length', 3)
    // })
    
    // it('Test Case 7: delete all address', function () {
    //     cy.visit(Cypress.env('url'));
    //     cy.clickSignIn()
    //     cy.signIn(this.data.email, this.data.password)

    //     cy.clickAddress()

    //     cy.deleteEachItemsOntheTable()
    // })

})