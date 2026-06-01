/**
 * Caso de Teste 5: Registrar usuário com email já cadastrado
 * Referência: https://www.automationexercise.com/test_cases#collapse5
 */
describe('Caso de teste 5: Registrar usuário com email já existente', () => {
  it('deve exibir erro ao tentar cadastrar com email já registrado', () => {
    cy.fixture('usuarios').then(({ usuarioExistente }) => {
      // 1-3. Acessa a home e valida
      cy.visitarURL();
      cy.validarHomePage();

      // 4-5. Vai para login e valida 'New User Signup!'
      cy.visitarLoginPage();
      cy.get('.signup-form h2').should('contain', 'New User Signup!');

      // 6-7. Tenta cadastrar com email já registrado
      cy.preencherFormularioSignup(usuarioExistente.nome, usuarioExistente.email);

      // 8. Valida erro 'Email Address already exist!'
      cy.get('.signup-form p').should('contain', 'Email Address already exist!');
    });
  });
});
