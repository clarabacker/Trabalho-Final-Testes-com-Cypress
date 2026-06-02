describe('Caso de teste 3: Login com credenciais incorretas', () => {
  it('deve exibir mensagem de erro ao tentar login com dados inválidos', () => {
    cy.fixture('usuarios').then(({ usuarioInvalido }) => {
      cy.visitarURL();
      cy.validarHomePage();

      cy.visitarLoginPage();
      cy.get('.login-form h2')
        .should('be.visible')
        .and('contain', 'Login to your account');
      cy.realizarLogin(usuarioInvalido.email, usuarioInvalido.senha);

      cy.contains(
        '.login-form p',
        'Your email or password is incorrect!'
      ).should('be.visible');
    });
  });
});
