/**
 * Caso de Teste 2: Login com email e senha corretos
 * Referência: https://www.automationexercise.com/test_cases#collapse2
 *
 * ⚠️  Requer conta pré-existente. Atualize as credenciais em
 *     cypress/fixtures/usuarios.json antes de executar.
 *     O teste deleta a conta ao final — recrie antes de rodar novamente.
 */
describe('Caso de teste 2: Login com credenciais corretas', () => {
  it('deve fazer login com credenciais corretas e deletar a conta', () => {
    cy.fixture('usuarios').then(({ usuarioExistente }) => {
      // 1-3. Acessa a home e valida
      cy.visitarURL();
      cy.validarHomePage();

      // 4-5. Vai para login e valida 'Login to your account'
      cy.visitarLoginPage();
      cy.get('.login-form h2').should('contain', 'Login to your account');

      // 6-7. Realiza login com credenciais corretas
      cy.realizarLogin(usuarioExistente.email, usuarioExistente.senha);

      // 8. Valida 'Logged in as username'
      cy.validarLogadoComo(usuarioExistente.nome);

      // 9-10. Deleta a conta e valida 'ACCOUNT DELETED!'
      cy.deletarConta();
    });
  });
});
