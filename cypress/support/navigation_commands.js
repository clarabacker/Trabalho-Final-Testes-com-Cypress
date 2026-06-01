// Comandos de navegação entre páginas

Cypress.Commands.add('visitarURL', () => {
  cy.visit('https://www.automationexercise.com');
});

Cypress.Commands.add('irParaProdutos', () => {
  cy.get('ul.nav.navbar-nav')
    .contains('a[href="/products"]', 'Products')
    .should('be.visible')
    .click();
});

Cypress.Commands.add('irParaCarrinho', () => {
  cy.get('ul.nav.navbar-nav')
    .contains('a[href="/view_cart"]', 'Cart')
    .should('be.visible')
    .click();
});

Cypress.Commands.add('irParaTestCases', () => {
  cy.get('ul.nav.navbar-nav')
    .contains('a[href="/test_cases"]', 'Test Cases')
    .should('be.visible')
    .click();
});
