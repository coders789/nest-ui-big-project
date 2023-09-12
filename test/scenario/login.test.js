import * as homePage from '@test/pages/home.page';
import * as dashboardPage from '@test/pages/dashboard.page';
import * as userData from '@test/data/user.data';
import * as route from '@helper/route';
import * as element from '@helper/element';
import * as assert from '@helper/assert';
import { ROUTES } from '@test/consts/routes';

describe('Login Test', () => {
    before(() => {
        route.visit(ROUTES.home);
    });

    // it('Should success login to website dashboard as Customer', () => {
    //     element.click(homePage.customerLoginMenu);

    //     assert.shouldContainText(homePage.loginModalLabel, 'Your Name :');

    //     cy.get('#userSelect').focus().click();
    //     cy.get('#userSelect').select('Hermione Granger');
    //     element.click(homePage.loginButton);
        
    //     assert.shouldBeVisible(dashboardPage.loginUsernameLabel);
    //     assert.shouldContainText(dashboardPage.loginUsernameLabel, `Hermoine Granger`);
    // });

    it('Should success login to website dashboard as Customer', () => {
        element.click(homePage.bankManagerLogin);
        
        assert.shouldBeVisible(dashboardPage.addCustomerTab);
        assert.shouldBeVisible(dashboardPage.openAccountTab);
        assert.shouldBeVisible(dashboardPage.customerTab);
    });
});

