describe('Caso de teste 12: Adicionar produtos ao carrinho', () => {
  it('deve adicionar dois produtos ao carrinho e validar os detalhes do carrinho', () => {
    cy.visitarURL();

    cy.validarHomePage();

    cy.irParaProdutos();

    cy.validarProdutos();

    cy.adicionarProdutoAoCarrinho(0);

    cy.continuarComprando();

    cy.adicionarProdutoAoCarrinho(1);

    cy.verCarrinho();

    cy.validarPaginaCarrinho();

    cy.get('#cart_info_table tbody tr').should('have.length', 2);

    cy.get('#cart_info_table tbody tr').each(($row) => {
      cy.wrap($row).within(() => {
        cy.get('.cart_price').should('be.visible');
        cy.get('.cart_quantity').should('contain', '1');
        cy.get('.cart_total').should('be.visible');
      });
    });
  });
});
