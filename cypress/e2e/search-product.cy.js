describe('Caso de teste 9: Pesquisar produto', () => {
  it('deve buscar um produto e exibir os resultados relacionados', () => {
    const termoBusca = 'Blue Top';

    cy.visitarURL();
    cy.validarHomePage();

    cy.irParaProdutos();

    cy.validarProdutos();

    cy.get('#search_product').type(termoBusca);
    cy.get('#submit_search').click();

    cy.get('.title').should('contain', 'Searched Products');

    cy.get('.features_items .product-image-wrapper').should(
      'have.length.greaterThan',
      0
    );

    cy.get('.productinfo p').each(($el) => {
      cy.wrap($el)
        .invoke('text')
        .then((texto) => {
          expect(texto.toLowerCase()).to.include(termoBusca.toLowerCase());
        });
    });
  });
});
