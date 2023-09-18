import * as customerAccount from "@test/pages/customer-account.page";
import {ROUTES} from '@test/consts/routes';
import * as assert from '@helper/assert';
import * as element from "@helper/element";

describe("Customer Account Test", () => {
    beforeEach(() => {
        cy.loginAsCustomer()
    })

    it("Verify after login landed to the customer account page", () => {
        cy.url().should('eq', 'https://globalsqa.com/angularJs-protractor/BankingProject/#/account')
        assert.shouldContainText(customerAccount.accountName, "Hermoine Granger")
    })

    it("Verify customer have access to transactions, deposit, and withdrawl", () => {
        assert.shouldBeVisible(customerAccount.buttonTransactionsMenu)
        assert.shouldBeVisible(customerAccount.buttonDepositMenu)
        assert.shouldBeVisible(customerAccount.buttonWithdrawlMenu)
    })

    it("Should have list of accounts at least 3 default account number", () => {
        element.get(customerAccount.accountSelect).find("option").should("have.length.at.least", 3)
    })

    it("Should show information based on changed account number", () => {
        element.get(customerAccount.accountSelect).select('1003');
        assert.shouldContainText(customerAccount.accountName, "Hermoine Granger")
        assert.shouldContainText(customerAccount.accountNumber, "1003")
        assert.shouldContainText(customerAccount.accountBalance, "0")
        assert.shouldContainText(customerAccount.accountCurrency, "Rupee")
    })
})