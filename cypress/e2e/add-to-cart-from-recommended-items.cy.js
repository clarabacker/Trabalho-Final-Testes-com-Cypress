describe('Caso de teste 22: Adicionar ao carrinho a partir dos itens recomendados', () => {
  it('deve adicionar produto recomendado ao carrinho', () => {
    cy.visitarURL();

    cy.validarHomePage();

    cy.get('.recommended_items').scrollIntoView().should('be.visible');

    cy.get('.recommended_items')
      .find('.product-image-wrapper:visible')
      .first()
      .as('produto');

    cy.get('@produto').within(() => {
      cy.get('.productinfo p')
        .invoke('text')
        .then((nome) => {
          cy.wrap(nome).as('produtoAdicionado');
        });

      cy.contains('Add to cart').click();
    });

    cy.verCarrinho();

    cy.validarPaginaCarrinho();

    cy.get('@produtoAdicionado').then((nome) => {
      cy.get('#cart_info_table')
        .contains('.cart_description', nome)
        .should('be.visible');
    });
  });
});
