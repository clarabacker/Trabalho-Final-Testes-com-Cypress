Cypress.Commands.add('validarHomePage', () => {
  cy.url().should('eq', 'https://www.automationexercise.com/');
  cy.get('#slider-carousel').should('be.visible');
});
