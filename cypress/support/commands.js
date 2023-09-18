import * as homePage from '@test/pages/home.page';
import * as dashboardPage from '@test/pages/dashboard.page';
import * as userData from '@test/data/user.data';
import * as route from '@helper/route';
import * as element from '@helper/element';
import * as assert from '@helper/assert';
import { ROUTES } from '@test/consts/routes';

Cypress.Commands.add('loginAsBankManager', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/BankingProject/#/login');
    cy.get(homePage.bankManagerLogin).click();
    cy.get(dashboardPage.addCustomerTab).should('be.visible');
    cy.get(dashboardPage.openAccountTab).should('be.visible');
    cy.get(dashboardPage.customerTab).should('be.visible');
  });

Cypress.Commands.add('loginAsCustomer', () => {
    route.visit(ROUTES.login)
    element.click(homePage.customerLoginMenu);
    cy.get('#userSelect').select('Hermoine Granger');
    element.click(homePage.loginButton);
});