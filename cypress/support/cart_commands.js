Cypress.Commands.add('validarPaginaCarrinho', () => {
  cy.url().should('include', '/view_cart');
  cy.get('#cart_info_table').should('be.visible');
});
