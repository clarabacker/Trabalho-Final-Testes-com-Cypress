/**
 * Caso de Teste 6: Formulário de Contato
 * Referência: https://www.automationexercise.com/test_cases#collapse6
 */
describe('Caso de teste 6: Formulário de contato', () => {
  it('deve enviar o formulário de contato com sucesso', () => {
    // 1-3. Acessa a home e valida
    cy.visitarURL();
    cy.validarHomePage();

    // 4-5. Navega para Contact Us e valida 'GET IN TOUCH'
    cy.irParaContatoUs();
    cy.get('.contact-form h2').should('contain', 'Get In Touch');

    // 6. Preenche o formulário de contato
    cy.preencherFormularioContato({
      nome: 'Automation Tester',
      email: 'automation@test.com',
      assunto: 'Teste Automatizado - Cypress',
      mensagem: 'Mensagem enviada via teste automatizado com Cypress.',
    });

    // 7. Faz upload de arquivo
    cy.get('[name="upload_file"]').selectFile({
      contents: Cypress.Buffer.from('arquivo de teste cypress'),
      fileName: 'test-upload.txt',
      mimeType: 'text/plain',
    });

    // 8-9. Clica em Submit e aceita o alert
    cy.get('[data-qa="submit-button"]').click();
    cy.on('window:confirm', () => true);

    // 10. Valida mensagem de sucesso
    cy.get('.status.alert-success').should(
      'contain',
      'Success! Your details have been submitted successfully.'
    );

    // 11. Clica em Home e valida que voltou para a home
    cy.get('#form-section a.btn').contains('Home').click();
    cy.validarHomePage();
  });
});
