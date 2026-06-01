describe('Caso de teste 17: Remover produtos do carrinho', () => {
  it('deve adicionar produtos e remover um item do carrinho', () => {
    cy.visitarURL();

    cy.validarHomePage();

    cy.adicionarProdutoAoCarrinho(0);

    cy.continuarComprando();

    cy.adicionarProdutoAoCarrinho(1);

    cy.continuarComprando();

    cy.irParaCarrinho();

    cy.validarPaginaCarrinho();

    cy.get('#cart_info_table tbody tr')
      .first()
      .within(() => {
        cy.get('a.cart_quantity_delete').click();
      });

    cy.get('#cart_info_table tbody tr').should('have.length', 1);
  });
});
