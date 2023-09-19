import * as addCustomerPage from '@test/pages/addCustomer.page';
import * as dashboardPage from '@test/pages/dashboard.page';
import * as assert from '@helper/assert';
import * as element from '@helper/element';

describe('Add Customer Test', () => {
    before(() => {
        cy.loginAsBankManager();
    });

    it('Should success landing on Add Customer page', () => {
        element.click(dashboardPage.addCustomerTab);

        assert.shouldBeVisible(addCustomerPage.firstNameInput);
        assert.shouldBeVisible(addCustomerPage.lastNameInput);
        assert.shouldBeVisible(addCustomerPage.postCodeInput);
        assert.shouldBeVisible(addCustomerPage.submitButton);
    });

    //masih failed ini
    // it('Should success add new customer with valid input', () => {

        // element.fillField(addCustomerPage.firstNameInput,'hohoho')
        // element.fillField(addCustomerPage.lastNameInput,'xixixi')
        // element.fillField(addCustomerPage.postCodeInput,'wkwkwk')

        // element.click(addCustomerPage.submitButton);
    // });
});