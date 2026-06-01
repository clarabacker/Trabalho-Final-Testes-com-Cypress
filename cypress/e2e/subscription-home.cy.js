/**
 * Caso de Teste 10: Verificar inscrição na newsletter na home page
 * Referência: https://www.automationexercise.com/test_cases#collapse10
 */
describe('Caso de teste 10: Verificar inscrição na newsletter na home page', () => {
  it('deve assinar a newsletter pelo rodapé da home page com sucesso', () => {
    // 1-3. Acessa a home e valida
    cy.visitarURL();
    cy.validarHomePage();

    // 4. Rola até o footer
    cy.scrollTo('bottom');

    // 5. Valida o texto 'SUBSCRIPTION' no footer
    cy.get('#footer').within(() => {
      cy.get('h2').should('contain', 'Subscription');
    });

    // 6. Digita o email e clica no botão de inscrição
    cy.get('#susbscribe_email').type('newsletter_test@automation.com');
    cy.get('#subscribe').click();

    // 7. Valida mensagem de sucesso
    cy.get('#success-subscribe').should(
      'contain',
      'You have been successfully subscribed!'
    );
  });
});
