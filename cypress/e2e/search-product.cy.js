/**
 * Caso de Teste 9: Pesquisar produto
 * Referência: https://www.automationexercise.com/test_cases#collapse9
 */
describe('Caso de teste 9: Pesquisar produto', () => {
  it('deve buscar um produto e exibir os resultados relacionados', () => {
    const termoBusca = 'Blue Top';

    // 1-3. Acessa a home e valida
    cy.visitarURL();
    cy.validarHomePage();

    // 4-5. Navega para Products e valida
    cy.irParaProdutos();
    cy.url().should('include', '/products');
    cy.get('.title').should('contain', 'All Products');

    // 6. Digita o termo de busca e clica em pesquisar
    cy.get('#search_product').type(termoBusca);
    cy.get('#submit_search').click();

    // 7. Valida que 'SEARCHED PRODUCTS' está visível
    cy.get('.title').should('contain', 'Searched Products');

    // 8. Valida que os produtos relacionados estão visíveis
    cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);
    cy.get('.productinfo p').each(($el) => {
      cy.wrap($el)
        .invoke('text')
        .then((texto) => {
          expect(texto.toLowerCase()).to.include(termoBusca.toLowerCase());
        });
    });
  });
});
