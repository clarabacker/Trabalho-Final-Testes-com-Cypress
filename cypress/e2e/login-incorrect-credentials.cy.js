/**
 * Caso de Teste 3: Login com email e senha incorretos
 * Referência: https://www.automationexercise.com/test_cases#collapse3
 */
describe('Caso de teste 3: Login com credenciais incorretas', () => {
  it('deve exibir mensagem de erro ao tentar login com dados inválidos', () => {
    cy.fixture('usuarios').then(({ usuarioInvalido }) => {
      // 1-3. Acessa a home e valida
      cy.visitarURL();
      cy.validarHomePage();

      // 4-5. Vai para login e valida 'Login to your account'
      cy.visitarLoginPage();
      cy.get('.login-form h2').should('contain', 'Login to your account');

      // 6-7. Tenta login com credenciais incorretas
      cy.realizarLogin(usuarioInvalido.email, usuarioInvalido.senha);

      // 8. Valida mensagem de erro
      cy.get('.login-form p').should('contain', 'Your email or password is incorrect!');
    });
  });
});
