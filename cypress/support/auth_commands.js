// Comandos relacionados a autenticação (signup, login, logout, delete)

Cypress.Commands.add('visitarLoginPage', () => {
  cy.get('ul.nav.navbar-nav')
    .contains('a[href="/login"]', 'Signup / Login')
    .should('be.visible')
    .click();
  cy.url().should('include', '/login');
});

Cypress.Commands.add('preencherFormularioSignup', (nome, email) => {
  cy.get('[data-qa="signup-name"]').type(nome);
  cy.get('[data-qa="signup-email"]').type(email);
  cy.get('[data-qa="signup-button"]').click();
});

Cypress.Commands.add('realizarLogin', (email, senha) => {
  cy.get('[data-qa="login-email"]').type(email);
  cy.get('[data-qa="login-password"]').type(senha);
  cy.get('[data-qa="login-button"]').click();
});

Cypress.Commands.add('deletarConta', () => {
  cy.get('ul.nav.navbar-nav')
    .contains('a[href="/delete_account"]', 'Delete Account')
    .click();
  cy.get('[data-qa="account-deleted"]')
    .should('be.visible')
    .and('contain', 'Account Deleted!');
  cy.get('[data-qa="continue-button"]').click();
});

Cypress.Commands.add('validarLogadoComo', (nomeUsuario) => {
  cy.get('ul.nav.navbar-nav')
    .contains(`Logged in as ${nomeUsuario}`)
    .should('be.visible');
});
