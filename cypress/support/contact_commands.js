// Comandos relacionados ao formulário de contato

Cypress.Commands.add('irParaContatoUs', () => {
  cy.get('ul.nav.navbar-nav')
    .contains('a[href="/contact_us"]', 'Contact us')
    .should('be.visible')
    .click();
  cy.url().should('include', '/contact_us');
});

Cypress.Commands.add('preencherFormularioContato', ({ nome, email, assunto, mensagem }) => {
  cy.get('[data-qa="name"]').type(nome);
  cy.get('[data-qa="email"]').type(email);
  cy.get('[data-qa="subject"]').type(assunto);
  cy.get('[data-qa="message"]').type(mensagem);
});
