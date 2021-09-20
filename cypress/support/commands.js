// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload'; // plugin for file upload feature
import AddressBookPageObject from '../support/PageObject/AddressBookPageObject'

const addressBookPageObject = new AddressBookPageObject();

// custom function
// sign up function
Cypress.Commands.add('signUp', (email, password) => {
    addressBookPageObject.getSignUpRow().contains('Sign up').click()
    addressBookPageObject.getSignupEmailField().type(email)
    addressBookPageObject.getSignUpPasswordField().type(password)
    addressBookPageObject.getSignUpSubmitButton().click()
})

// check email address after sign up
Cypress.Commands.add('checkEmailAfterSignUp', (email) => {
    addressBookPageObject.getNavbarTextAfterSignup().should('have.text', email)
})

Cypress.Commands.add('clickSignIn', () => {
    addressBookPageObject.getSignIn().click() // click signin button
})

//sign in function
Cypress.Commands.add('signIn', (email, password) => {
    addressBookPageObject.getSignInEmailField().type(email) // input sign in email
    addressBookPageObject.getSignInPasswordField().type(password) // input sign in password
    addressBookPageObject.getSignInSubmitButton().click() //click sign in submit button
})

// click list function
Cypress.Commands.add('clickListAfterSavedAddress', () => {
    addressBookPageObject.getListAfterSavedAddress().contains('List').click()
})

// click address 
Cypress.Commands.add('clickAddress', () => {
    addressBookPageObject.getNavbarNavAddress().contains('Addresses').click()
})

// click new address
Cypress.Commands.add('clickNewAddress', () => {
    addressBookPageObject.getNewAddress().contains('New Address').click()
})

// fill address data
Cypress.Commands.add('fill_address_data', (data) => {

    addressBookPageObject.getAddressFirstName().type(data.firstName)
    addressBookPageObject.getAddressLastName().type(data.lastName)
    addressBookPageObject.getStreetAddreess().type(data.street_address)
    addressBookPageObject.getCity().type(data.city)
    addressBookPageObject.getState().select(data.state).should('have.value', data.state)
    addressBookPageObject.getZipCode().type(data.zipCode)
    addressBookPageObject.getColor().invoke('val', data.color).trigger('change')
    addressBookPageObject.getFilePath().attachFile(data.file)

})

// click create address button
Cypress.Commands.add('clickCreateAddressButton', () => {
    addressBookPageObject.getCreateAddressButton().click()
})

// click edit address
Cypress.Commands.add('clickEditAddress', () => {
    addressBookPageObject.getEditAddress().last().contains('Edit').click()
})

// check address data
Cypress.Commands.add('check_address_data', (data) => {
    addressBookPageObject.getAddressFirstName().should('have.value', data.firstName)
    addressBookPageObject.getAddressLastName().should('have.value', data.lastName)
    addressBookPageObject.getStreetAddreess().should('have.value', data.street_address)
    addressBookPageObject.getCity().should('have.value', data.city)
    addressBookPageObject.getState().select(data.state).should('have.value', data.state)
    addressBookPageObject.getZipCode().should('have.value', data.zipCode)
    addressBookPageObject.getColor().should('have.value', data.color)
    addressBookPageObject.getFilePath().attachFile(data.file)
})

// update address data
Cypress.Commands.add('update_address_data', (data) => {
    addressBookPageObject.getAddressFirstName().type(data.addName)
    addressBookPageObject.getState().select(data.newState).should('have.value', data.newState)
})

// click update address button
Cypress.Commands.add('update_address_button_click', () => {
    addressBookPageObject.getUpdateAddressButton().click()
})

// check first name error msg
Cypress.Commands.add('check_visibity_Empty_FirstName_Error_Msg', (data) => {
    cy.get('#error_explanation ul li').contains(data.Empty_FirstName_Error_Msg).should('be.visible')
})

//check zip code error msg
Cypress.Commands.add('check_visibity_Empty_ZipCode_Error_Msg', (data) => {
    cy.get('#error_explanation ul li').contains(data.Empty_ZipCode_Error_Msg).should('be.visible')
})

// fill in address data without first name and zip code
Cypress.Commands.add('fill_address_data_without_firstnameAndzipcode', (data) => {

    addressBookPageObject.getAddressFirstName().invoke('val', '')
    addressBookPageObject.getAddressLastName().type(data.lastName)
    addressBookPageObject.getStreetAddreess().type(data.street_address)
    addressBookPageObject.getCity().type(data.city)
    addressBookPageObject.getState().select(data.state).should('have.value', data.state)
    addressBookPageObject.getZipCode().invoke('val', '')

})

//check how many rows in that table
Cypress.Commands.add('check_table_row_length', (expectedRowLength) => {
    addressBookPageObject.getAddressTableRow().should('have.length', expectedRowLength)
})

//fill in correct data
Cypress.Commands.add('correct_the_address_error', (data) => {

    addressBookPageObject.getAddressFirstName().type(data.firstname2)
    addressBookPageObject.getZipCode().type(data.zipCode2)
})

//delete all items in a table
Cypress.Commands.add('deleteEachItemsOntheTable', () => {
    addressBookPageObject.getAddressTableRow().then(listing => {
        const listingCount = Cypress.$(listing).length;
        for (let n = 0; n < listingCount; n++) {
            addressBookPageObject.getDestoryButton().contains('Destroy').click()
        }
    });
})