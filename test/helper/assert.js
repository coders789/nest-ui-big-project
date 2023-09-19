export function shouldBeVisible(selector) {
    cy.get(selector).should('be.visible');
}

export function shouldBeNotVisible(selector) {
    cy.get(selector).should('not.be.visible');
}

export function shouldContainText(selector, value) {
    cy.get(selector).should('contain', value);
}

export function shouldHaveClass(selector, value) {
    cy.get(selector).should('have.class', value)
}

export function shouldHaveAttributeWithValue(selector, nameAttribute, value) {
    cy.get(selector).should("have.attr", nameAttribute, value)
}

export function shouldHaveLength(selector, length) {
    cy.get(selector).should("have.length", length)
}