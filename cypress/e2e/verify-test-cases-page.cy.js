/**
 * Caso de Teste 7: Verificar página de Test Cases
 * Referência: https://www.automationexercise.com/test_cases#collapse7
 */
describe('Caso de teste 7: Verificar página de Test Cases', () => {
  it('deve navegar para a página de Test Cases com sucesso', () => {
    // 1-3. Acessa a home e valida
    cy.visitarURL();
    cy.validarHomePage();

    // 4. Clica em Test Cases
    cy.irParaTestCases();

    // 5. Valida que a página de Test Cases foi carregada
    cy.url().should('include', '/test_cases');
    cy.get('.title').should('contain', 'Test Cases');
  });
});
