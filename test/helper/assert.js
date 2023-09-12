export function shouldBeVisible(selector) {
    cy.get(selector).should('be.visible');
}

export function shouldContainText(selector, value) {
    cy.get(selector).should('contain', value);
}