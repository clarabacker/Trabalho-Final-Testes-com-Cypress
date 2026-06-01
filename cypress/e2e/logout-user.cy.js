/**
 * Caso de Teste 4: Logout de Usuário
 * Referência: https://www.automationexercise.com/test_cases#collapse4
 *
 * ⚠️  Requer conta pré-existente. Atualize as credenciais em
 *     cypress/fixtures/usuarios.json antes de executar.
 */
describe('Caso de teste 4: Logout de usuário', () => {
  it('deve realizar logout e redirecionar para a página de login', () => {
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

      // 9. Clica em Logout
      cy.get('ul.nav.navbar-nav')
        .contains('a[href="/logout"]', 'Logout')
        .click();

      // 10. Valida redirecionamento para página de login
      cy.url().should('include', '/login');
      cy.get('.login-form h2').should('contain', 'Login to your account');
    });
  });
});
