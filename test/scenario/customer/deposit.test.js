import * as customerAccount from "@test/pages/customer-account.page";
import * as transaction from "@test/pages/transactions.page";
import {ROUTES} from '@test/consts/routes';
import * as assert from '@helper/assert';
import * as element from "@helper/element";
import {buttonSubmitDepositWithDrawl, messageSubmitDepositWithDrawl} from "../../pages/customer-account.page";
import {shouldContainText} from "../../helper/assert";

describe("Deposit Test", () => {
    beforeEach(() => {
        cy.loginAsCustomer()
    })

    it("Verify section deposit is show when deposit button menu clicked", () => {
        element.click(customerAccount.buttonDepositMenu);
        assert.shouldBeVisible(customerAccount.labelDepositWithDrawl)
        assert.shouldContainText(customerAccount.labelDepositWithDrawl, "Amount to be Deposited")

        assert.shouldBeVisible(customerAccount.inputDepositWithDrawl)

        assert.shouldBeVisible(customerAccount.buttonSubmitDepositWithDrawl)
        assert.shouldContainText(customerAccount.buttonSubmitDepositWithDrawl, "Deposit")
    })

    it("Verify input deposit only accept number", () => {
        element.click(customerAccount.buttonDepositMenu);
        cy.get(customerAccount.inputDepositWithDrawl).clear().type("b").should('have.value', "");
    })

    it("Verify input deposit success added", () => {
        element.click(customerAccount.buttonTransactionsMenu)
        element.click(transaction.resetButton)
        element.click(transaction.backButton)
        element.click(customerAccount.buttonDepositMenu);
        element.fillField(customerAccount.inputDepositWithDrawl, 1)
        element.click(customerAccount.buttonSubmitDepositWithDrawl)
        assert.shouldContainText(customerAccount.accountBalance, 1)

        assert.shouldContainText(customerAccount.messageSubmitDepositWithDrawl, "Deposit Successful")
        cy.wait(1000)
        element.click(customerAccount.buttonTransactionsMenu)
        assert.shouldHaveLength("tbody tr", 1)
        assert.shouldContainText("tbody tr td:nth-child(2)", 1)
    })
})