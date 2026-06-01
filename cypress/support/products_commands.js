Cypress.Commands.add('adicionarProdutoAoCarrinho', (index = 0) => {
  cy.get('.features_items .product-image-wrapper')
    .eq(index)
    .trigger('mouseover');

  cy.get('.features_items .product-image-wrapper')
    .eq(index)
    .contains('Add to cart')
    .click();
});
