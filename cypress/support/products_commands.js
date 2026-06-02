Cypress.Commands.add('adicionarProdutoAoCarrinho', (index = 0) => {
  cy.get('.features_items .product-image-wrapper')
    .eq(index)
    .trigger('mouseover');

  cy.get('.features_items .product-image-wrapper')
    .eq(index)
    .contains('Add to cart')
    .click();
});

Cypress.Commands.add('validarProdutos', () => {
  cy.url().should('include', '/products');
  cy.get('.features_items').should('be.visible');
  cy.contains('All Products').should('be.visible');
});
