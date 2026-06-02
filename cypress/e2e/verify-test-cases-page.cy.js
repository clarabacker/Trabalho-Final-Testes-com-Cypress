describe('Caso de teste 7: Verificar página de Test Cases', () => {
  it('deve navegar para a página de Test Cases com sucesso', () => {
    cy.visitarURL();
    cy.validarHomePage();

    cy.irParaTestCases();

    cy.url().should('include', '/test_cases');
    cy.get('.title').should('contain', 'Test Cases');
  });
});
