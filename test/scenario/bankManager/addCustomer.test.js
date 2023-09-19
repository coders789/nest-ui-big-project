import * as addCustomerPage from '@test/pages/addCustomer.page';
import * as dashboardPage from '@test/pages/dashboard.page';
import * as assert from '@helper/assert';

describe('Add Customer Test', () => {
    before(() => {
        cy.loginAsBankManager();
    });

    it('Should success landing on Add Customer page', () => {
        cy.get('button.tab[ng-click="addCust()"]').click();

        //yang ini kok gabisa ya TT_TT
        // element.click(dashboardPage.addCustomerTab);

        assert.shouldBeVisible(addCustomerPage.firstNameInput);
        assert.shouldBeVisible(addCustomerPage.lastNameInput);
        assert.shouldBeVisible(addCustomerPage.postCodeInput);
        assert.shouldBeVisible(addCustomerPage.submitButton);
    });

    it('Should success add new customer with valid input', () => {
        //ini juga gabisa, katanya element is not defined
        // element.fillField(addCustomerPage.firstNameInput,'hohoho')
        // element.fillField(addCustomerPage.lastNameInput,'xixixi')
        // element.fillField(addCustomerPage.postCodeInput,'wkwkwk')

        // element.click(addCustomerPage.submitButton);
    });
});