import * as dashboardPage from '@test/pages/dashboard.page';
import * as openAccountPage from '@test/pages/openAccount.page';
import * as assert from '@helper/assert';
import * as element from '@helper/element';

describe('Open account test', () => {
    beforeEach(() => {
        cy.loginAsBankManager();
        element.click(dashboardPage.openAccountTab);

    });
    it('Should success landing on Open Account page', () => {
        assert.shouldBeVisible(openAccountPage.selectUser);
        assert.shouldBeVisible(openAccountPage.selectCurrency);
    });

    it('Should success opening an account', () => {
        cy.get(openAccountPage.selectUser).select('Harry Potter');
        cy.get(openAccountPage.selectCurrency).select('Pound');
        element.click(openAccountPage.processButton);
        cy.on('window:alert',(message) => {
        expect(message).to.equal('Account created successfully with account Number :1016');
        });
    });
});