export function get(selector) {
    return cy.get(selector);
}

export function click(selector, ...args) {
    return cy.get(selector).click( ...args);
}

export function fillField(selector, value) {
    return cy.get(selector).clear().type(value).should('have.value', value);
}

export function select(selector, option) {
    return cy.get(selector).select(option);
  }

// export function select(selector) {
//     return cy.get(selector).select();
// }