Cypress.Commands.add('continuarComprando', () => {
  cy.get('.modal-content')
    .should('be.visible')
    .within(() => {
      cy.get('button[data-dismiss="modal"]')
        .contains('Continue Shopping')
        .should('be.visible')
        .click();
    });
});

Cypress.Commands.add('verCarrinho', () => {
  cy.get('.modal-content')
    .should('be.visible')
    .within(() => {
      cy.get('a[href="/view_cart"]')
        .contains('View Cart')
        .should('be.visible')
        .click();
    });
});
