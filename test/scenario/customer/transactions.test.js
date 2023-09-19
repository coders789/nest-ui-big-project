import * as customerAccount from "@test/pages/customer-account.page";
import * as transaction from "@test/pages/transactions.page";
import {ROUTES} from '@test/consts/routes';
import * as assert from '@helper/assert';
import * as element from "@helper/element";
import {shouldHaveLength} from "../../helper/assert";

describe("Transactions Account Test", () => {
    beforeEach(() => {
        cy.loginAsCustomer()
        element.click(customerAccount.buttonTransactionsMenu)
    })

    it("Verify landed to transactions page", () => {
        cy.url().should('eq', 'https://globalsqa.com/angularJs-protractor/BankingProject/#/listTx')
    })

    it("Verify back button redirect to customer account page", () => {
        element.click(transaction.backButton);
        cy.url().should('eq', 'https://globalsqa.com/angularJs-protractor/BankingProject/#/account')
    })

    it("Verify startDate minDate is 2015-01-01 and maxDate is 2015-07-28", () => {
        assert.shouldHaveAttributeWithValue(transaction.fieldInputDateStart, "min", "2015-01-01T00:00:00")
        assert.shouldHaveAttributeWithValue(transaction.fieldInputDateStart, "max", "2015-07-28T00:00:00")
    })

    it("Verify finishDate minDate is 2015-01-01 and maxDate is now date", () => {
        assert.shouldHaveAttributeWithValue(transaction.fieldInputDateEnd, "min", "2015-01-01T00:00:00")
        cy.get(transaction.fieldInputDateEnd)
            .invoke("attr", "max")
            .should("exist")
            .then((maxDateAttribute) => {
                const maxDate = maxDateAttribute.split("T")[0];
                const nowDate = new Date().toISOString().split(".")[0].split("T")[0];

                expect(maxDate).to.equal(nowDate);
            });
    })

    it("Verify if data more than 7 record show next button", () => {
        element.fillField(transaction.fieldInputDateStart, "2015-01-01T00:00")
        element.fillField(transaction.fieldInputDateEnd, "2015-07-28T00:00")
        assert.shouldBeVisible(transaction.paginationNextButton)
    })

    it("Verify if data more than 7 and now in page 2 show next and prev button", () => {
        element.fillField(transaction.fieldInputDateStart, "2015-01-01T00:00")
        element.fillField(transaction.fieldInputDateEnd, "2015-07-28T00:00")
        element.click(transaction.paginationNextButton)

        assert.shouldBeVisible(transaction.paginationNextButton)
        assert.shouldBeVisible(transaction.paginationBackButton)
    })

    it("Verify if data less than 7 next button showing but if clicked not changed page", () => {
        element.fillField(transaction.fieldInputDateStart, "2015-07-28T00:00")
        element.fillField(transaction.fieldInputDateEnd, "2015-07-28T00:00")

        assert.shouldBeVisible(transaction.paginationNextButton)
        element.click(transaction.paginationNextButton)
        assert.shouldBeNotVisible(transaction.paginationBackButton)
    })

    it("Should success reset data table", () => {
        element.click(transaction.resetButton)
        assert.shouldHaveLength("tbody tr", 0)
    })
})