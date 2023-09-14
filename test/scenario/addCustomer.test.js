import * as addCustomerPage from '@test/pages/addCustomer.page';
import * as assert from '@helper/assert';

describe('Add Customer Test', () => {
    before(() => {
        cy.loginAsBankManager();
    });

    it('Should success landing on Add Customer page', () => {
        assert.shouldBeVisible(addCustomerPage.activeAddCustomerTab);
        // assert.shouldBeVisible(dashboardPage.openAccountTab);
        // assert.shouldBeVisible(dashboardPage.customerTab);
    });
});