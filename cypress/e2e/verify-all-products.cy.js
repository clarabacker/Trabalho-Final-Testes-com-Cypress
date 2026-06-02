describe('Caso de teste 8: Verificar todos os produtos e detalhe do produto', () => {
  it('deve listar os produtos e exibir os detalhes do primeiro produto', () => {
    cy.visitarURL();
    cy.validarHomePage();

    cy.irParaProdutos();

    cy.validarProdutos();

    cy.get('a[href="/product_details/1"]').first().click();

    cy.url().should('include', '/product_details');

    cy.get('.product-information h2').should('be.visible');
    cy.get('.product-information p').contains('Category').should('be.visible');
    cy.get('.product-information span span').should('be.visible');
    cy.get('.product-information p')
      .contains('Availability')
      .should('be.visible');
    cy.get('.product-information p').contains('Condition').should('be.visible');
    cy.get('.product-information p').contains('Brand').should('be.visible');
  });
});
