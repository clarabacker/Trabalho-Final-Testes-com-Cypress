describe('Caso de teste 12: Adicionar produtos ao carrinho', () => {
  it('deve adicionar dois produtos ao carrinho e validar os detalhes do carrinho', () => {
    cy.visitarURL();

    cy.url().should('eq', 'https://www.automationexercise.com/');
    cy.get('#slider-carousel').should('be.visible');

    cy.irParaProdutos();

    cy.url().should('include', '/products');
    cy.get('.features_items').should('be.visible');
    cy.contains('All Products').should('be.visible');

    cy.adicionarProdutoAoCarrinho(0);

    cy.get('.btn-success')
      .contains('Continue Shopping')
      .should('be.visible')
      .click();

    cy.adicionarProdutoAoCarrinho(1);

    cy.irParaCarrinho();

    cy.url().should('include', '/view_cart');
    cy.get('#cart_info_table').should('be.visible');

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
