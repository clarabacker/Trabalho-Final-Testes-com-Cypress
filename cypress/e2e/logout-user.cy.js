describe('Caso de teste 4: Logout de usuário', () => {
  it('deve realizar logout e redirecionar para a página de login', () => {
    cy.fixture('usuarios').then(({ usuarioExistente }) => {
      cy.visitarURL();
      cy.validarHomePage();

      cy.visitarLoginPage();
      cy.get('.login-form h2').should('contain', 'Login to your account');

      cy.realizarLogin(usuarioExistente.email, usuarioExistente.senha);

      cy.validarLogadoComo(usuarioExistente.nome);

      cy.get('ul.nav.navbar-nav')
        .contains('a[href="/logout"]', 'Logout')
        .click();

      cy.url().should('include', '/login');
      cy.get('.login-form h2').should('contain', 'Login to your account');
    });
  });
});
