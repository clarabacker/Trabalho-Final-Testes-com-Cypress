const contato = {
  nome: 'Automation Tester',
  email: 'automation@test.com',
  assunto: 'Teste Automatizado - Cypress',
  mensagem: 'Mensagem enviada via teste automatizado com Cypress.',
};

const validarContactUs = () => {
  cy.location('pathname').should('eq', '/contact_us');
  cy.contains('h2', 'Get In Touch').should('be.visible');
};

const irParaContactUs = () => {
  cy.get('ul.nav.navbar-nav')
    .contains('a[href="/contact_us"]', 'Contact us')
    .should('be.visible')
    .click();
};

const preencherFormularioContato = ({ nome, email, assunto, mensagem }) => {
  cy.get('[data-qa="name"]').type(nome);
  cy.get('[data-qa="email"]').type(email);
  cy.get('[data-qa="subject"]').type(assunto);
  cy.get('[data-qa="message"]').type(mensagem);
};

describe('Caso de teste 6: Formulário de contato', () => {
  it('deve enviar o formulário de contato com sucesso', () => {
    cy.visitarURL();
    cy.validarHomePage();

    irParaContactUs();
    validarContactUs();

    preencherFormularioContato(contato);

    cy.get('[name="upload_file"]').selectFile(
      'cypress/fixtures/test-upload.txt'
    );

    cy.get('[name="upload_file"]').should(($input) => {
      const file = $input.prop('files')[0];

      expect(file).to.exist;
      expect(file.name).to.equal('test-upload.txt');
    });

    cy.on('window:confirm', (text) => {
      expect(text).to.contains('Press OK to proceed!');
      return true;
    });

    cy.get('[data-qa="submit-button"]').should('be.visible').click();

    cy.get('.status.alert-success').should(
      'contain',
      'Success! Your details have been submitted successfully.'
    );

    cy.get('#form-section .btn').contains('Home').should('be.visible').click();

    cy.validarHomePage();
  });
});
