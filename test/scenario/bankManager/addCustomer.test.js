import * as addCustomerPage from '@test/pages/addCustomer.page';
import * as dashboardPage from '@test/pages/dashboard.page';
import * as openAccountPage from '@test/pages/openAccount.page';
import * as assert from '@helper/assert';
import * as element from '@helper/element';
import * as data from '@test/data/user.data';

describe('Landing on Add Customer Test', () => {
    before(() => {
        cy.loginAsBankManager();
        element.click(dashboardPage.addCustomerTab);
    });
    it('Should success landing on Add Customer page', () => {
        assert.shouldBeVisible(addCustomerPage.firstNameInput);
        assert.shouldBeVisible(addCustomerPage.lastNameInput);
        assert.shouldBeVisible(addCustomerPage.postCodeInput);
        assert.shouldBeVisible(addCustomerPage.submitButton);
    });
});

describe('Add Customer Test', () => {
    beforeEach(() => {
        cy.loginAsBankManager();
        element.click(dashboardPage.addCustomerTab)
    });
    it('Should success add new customer with valid input', () => {
        element.click(dashboardPage.addCustomerTab);
        element.fillField(addCustomerPage.firstNameInput, data.firstName)
        element.fillField(addCustomerPage.lastNameInput, data.lastName)
        element.fillField(addCustomerPage.postCodeInput, data.postCode)

        element.click(addCustomerPage.submitButton);

        cy.on('window:alert', (message) => {
            expect(message).to.equal('Customer added successfully with customer id :6');
        });
    })

    it('Should success see error message when submit blank form', () => {
        element.click(addCustomerPage.submitButton);

        cy.on('window:alert', (message) => {
            expect(message).to.equal('Please fill out this field');
        });
    });
});