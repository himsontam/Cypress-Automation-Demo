const testData = require("../../fixtures/test1/data.json")

describe(`Dynamic Data Test`, () => {
    beforeEach(() => {

    });

    it("Makes sure the homepage is visible", function () {
        cy.log(testData.email)
    });
});