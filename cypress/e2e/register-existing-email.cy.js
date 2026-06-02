describe('Caso de teste 5: Registrar usuário com email já existente', () => {
  it('deve exibir erro ao tentar cadastrar com email já registrado', () => {
    cy.fixture('usuarios').then(({ usuarioExistente }) => {
      cy.visitarURL();
      cy.validarHomePage();

      cy.visitarLoginPage();
      cy.get('.signup-form h2').should('contain', 'New User Signup!');

      cy.preencherFormularioSignup(
        usuarioExistente.nome,
        usuarioExistente.email
      );

      cy.get('.signup-form p').should(
        'contain',
        'Email Address already exist!'
      );
    });
  });
});
