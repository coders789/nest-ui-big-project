import * as customerAccount from "@test/pages/customer-account.page";
import * as transaction from "@test/pages/transactions.page";
import * as assert from '@helper/assert';
import * as element from "@helper/element";
import {accountBalance, buttonWithdrawlMenu} from "../../pages/customer-account.page";
import {shouldContainText} from "../../helper/assert";

describe("Deposit Test", () => {
    beforeEach(() => {
        cy.loginAsCustomer()
    })

    it("Verify section withdrawl is show when withdrawl button menu clicked", () => {
        element.click(customerAccount.buttonWithdrawlMenu);
        assert.shouldBeVisible(customerAccount.labelDepositWithDrawl)
        assert.shouldContainText(customerAccount.labelDepositWithDrawl, "Amount to be Withdrawn :")

        assert.shouldBeVisible(customerAccount.inputDepositWithDrawl)

        assert.shouldBeVisible(customerAccount.buttonSubmitDepositWithDrawl)
        assert.shouldContainText(customerAccount.buttonSubmitDepositWithDrawl, "Withdraw")
    })

    it("Verify input deposit only accept number", () => {
        element.click(customerAccount.buttonWithdrawlMenu);
        cy.get(customerAccount.inputDepositWithDrawl).clear().type("b").should('have.value', "");
    })

    describe("Verify withdrawl transaction", () => {
        beforeEach(() => {
            element.click(customerAccount.buttonTransactionsMenu)
            element.click(transaction.resetButton)
            element.click(transaction.backButton)
            element.click(customerAccount.buttonDepositMenu);
            element.fillField(customerAccount.inputDepositWithDrawl, 1)
            element.click(customerAccount.buttonSubmitDepositWithDrawl)
        })

        it("should fail when ammount withdrawl more than balance and balance not decreased", () => {
            // 2 Langkah pancingan, karena jika diautomate dari menu deposit ke menu withdrawl tidak berubah componentnya jadi harus ke transaction dulu
            element.click(customerAccount.buttonTransactionsMenu)
            element.click(transaction.backButton)

            element.click(customerAccount.buttonWithdrawlMenu);
            cy.get(customerAccount.inputDepositWithDrawl).type(10);
            element.click(customerAccount.buttonSubmitDepositWithDrawl)
            assert.shouldContainText(customerAccount.messageSubmitDepositWithDrawl, "Transaction Failed. You can not withdraw amount more than the balance.")
            assert.shouldContainText(customerAccount.accountBalance, 1)
        })

        it("should success when ammount withdrawl less or same than balance", () => {
            // 2 Langkah pancingan, karena jika diautomate dari menu deposit ke menu withdrawl tidak berubah componentnya jadi harus ke transaction dulu
            element.click(customerAccount.buttonTransactionsMenu)
            element.click(transaction.backButton)

            element.click(customerAccount.buttonWithdrawlMenu);
            element.fillField(customerAccount.inputDepositWithDrawl, 1)
            element.click(customerAccount.buttonSubmitDepositWithDrawl)
            assert.shouldContainText(customerAccount.messageSubmitDepositWithDrawl, "Transaction successful")
            assert.shouldContainText(customerAccount.accountBalance, 0)
        })
    })
})