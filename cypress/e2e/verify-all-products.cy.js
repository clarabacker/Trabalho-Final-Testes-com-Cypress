/**
 * Caso de Teste 8: Verificar todos os produtos e página de detalhe
 * Referência: https://www.automationexercise.com/test_cases#collapse8
 */
describe('Caso de teste 8: Verificar todos os produtos e detalhe do produto', () => {
  it('deve listar os produtos e exibir os detalhes do primeiro produto', () => {
    // 1-3. Acessa a home e valida
    cy.visitarURL();
    cy.validarHomePage();

    // 4-6. Navega para Products e valida lista de produtos
    cy.irParaProdutos();
    cy.url().should('include', '/products');
    cy.get('.title').should('contain', 'All Products');
    cy.get('.features_items').should('be.visible');
    cy.get('.product-image-wrapper').should('have.length.greaterThan', 0);

    // 7. Clica em 'View Product' do primeiro produto
    cy.get('a[href="/product_details/1"]').first().click();

    // 8. Valida que a página de detalhe foi aberta
    cy.url().should('include', '/product_details');

    // 9. Valida os campos de detalhe do produto
    cy.get('.product-information h2').should('be.visible');
    cy.get('.product-information p').contains('Category').should('be.visible');
    cy.get('.product-information span span').should('be.visible');
    cy.get('.product-information p').contains('Availability').should('be.visible');
    cy.get('.product-information p').contains('Condition').should('be.visible');
    cy.get('.product-information p').contains('Brand').should('be.visible');
  });
});
