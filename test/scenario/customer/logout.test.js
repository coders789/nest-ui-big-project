import * as homePage from '@test/pages/home.page';
import * as route from '@helper/route';
import * as element from '@helper/element';
import * as assert from '@helper/assert';
import {ROUTES} from '@test/consts/routes';

describe('Logout Test', () => {
    it('Verify button logout not showing when not logged', () => {
        route.visit(ROUTES.login)
        element.click(homePage.customerLoginMenu);
        assert.shouldBeNotVisible(homePage.logoutButton);
    });

    it('Verify button logout showing when logged', () => {
        cy.loginAsCustomer();
        assert.shouldBeVisible(homePage.logoutButton);
    });

    it('Should success logout as logged customer and redirect to select customer page', () => {
        cy.loginAsCustomer();
        assert.shouldBeVisible(homePage.logoutButton);
        element.click(homePage.logoutButton);

        cy.url().should('eq', 'https://globalsqa.com/angularJs-protractor/BankingProject/#/customer')
    });
});

