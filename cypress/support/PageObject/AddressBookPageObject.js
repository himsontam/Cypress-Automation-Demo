class AddressBookPageObject
{
    getSignUpRow(){
        return cy.get('.row');
    }
    
    getSignupEmailField(){
        return cy.get('#user_email');
    }

    getSignUpPasswordField(){
        return cy.get('#user_password');
    }

    getSignUpSubmitButton(){
        return cy.get('input[name="commit"]');
    }

    getNavbarTextAfterSignup(){
        return cy.get('.navbar-text');
    }

    getSignIn(){
        return cy.get('#sign-in');
    }

    getSignInEmailField(){
        return cy.get('#session_email');
    }

    getSignInPasswordField(){
        return cy.get('#session_password');
    }

    getSignInSubmitButton(){
        return cy.get('input[type="submit"]');
    }

    getNavbarNavAddress(){
        return cy.get('.navbar-nav');
    }

    getNewAddress(){
        return cy.get('.justify-content-center');
    }

    getAddressFirstName(){
        return cy.get('#address_first_name');
    }

    getAddressLastName(){
        return cy.get('#address_last_name');
    }

    getStreetAddreess(){
        return cy.get('#address_street_address');
    }

    getCity(){
        return cy.get('#address_city');
    }

    getState(){
        return cy.get('#address_state');
    }

    getZipCode(){
        return cy.get('#address_zip_code');
    }
    
    getColor(){
        return cy.get('input[type=color]');
    }
    
    getFilePath(){
        return cy.get('input[type="file"]');
    }

    getCreateAddressButton(){
        return cy.get('input[value="Create Address"]');
    }

    getListAfterSavedAddress(){
        return cy.get('.justify-content-center');
    }

    getEditAddress(){
        return cy.get('table > tbody > tr');
    }

    getUpdateAddressButton(){
        return cy.get('input[value="Update Address"]');
    }

    getAddressTableRow(){
        return cy.get('.table').find('tbody tr');
    }

    getDestoryButton(){
        return cy.get('a[data-confirm="Are you sure?"]');
    }

} export default AddressBookPageObject