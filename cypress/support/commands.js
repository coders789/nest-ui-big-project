import * as homePage from '@test/pages/home.page';
import * as dashboardPage from '@test/pages/dashboard.page';
import * as userData from '@test/data/user.data';
import * as route from '@helper/route';
import * as element from '@helper/element';
import * as assert from '@helper/assert';
import { ROUTES } from '@test/consts/routes';

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

Cypress.Commands.add('loginAsBankManager', () => {
    cy.visit('https://globalsqa.com/angularJs-protractor/BankingProject/#/login');
    cy.get(homePage.bankManagerLogin).click();
    cy.get(dashboardPage.addCustomerTab).should('be.visible');
    cy.get(dashboardPage.openAccountTab).should('be.visible');
    cy.get(dashboardPage.customerTab).should('be.visible');
  });