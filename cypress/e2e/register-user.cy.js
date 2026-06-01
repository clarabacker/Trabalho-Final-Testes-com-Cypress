/**
 * Caso de Teste 1: Registrar Usuário
 * Referência: https://www.automationexercise.com/test_cases#collapse1
 */
describe('Caso de teste 1: Registrar usuário', () => {
  it('deve registrar um novo usuário com sucesso e deletar a conta', () => {
    const timestamp = Date.now();
    const nome = 'Automation Tester';
    const email = `automation_${timestamp}@testmail.com`;
    const senha = 'AutoTest@2024';

    // 1-3. Acessa a home e valida
    cy.visitarURL();
    cy.validarHomePage();

    // 4-5. Vai para login e valida 'New User Signup!'
    cy.visitarLoginPage();
    cy.get('.signup-form h2').should('contain', 'New User Signup!');

    // 6-7. Preenche nome e email e clica em Signup
    cy.preencherFormularioSignup(nome, email);

    // 8. Valida 'ENTER ACCOUNT INFORMATION'
    cy.get('.login-form h2.title b').should('contain', 'Enter Account Information');

    // 9. Preenche título, senha e data de nascimento
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type(senha);
    cy.get('[data-qa="days"]').select('15');
    cy.get('[data-qa="months"]').select('June');
    cy.get('[data-qa="years"]').select('1995');

    // 10-11. Marca checkboxes
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    // 12. Preenche dados de endereço
    cy.get('[data-qa="first_name"]').type('Automation');
    cy.get('[data-qa="last_name"]').type('Tester');
    cy.get('[data-qa="company"]').type('Test Corp');
    cy.get('[data-qa="address"]').type('123 Test Street');
    cy.get('[data-qa="address2"]').type('Suite 456');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('California');
    cy.get('[data-qa="city"]').type('Los Angeles');
    cy.get('[data-qa="zipcode"]').type('90001');
    cy.get('[data-qa="mobile_number"]').type('5551234567');

    // 13. Clica em Create Account
    cy.get('[data-qa="create-account"]').click();

    // 14. Valida 'ACCOUNT CREATED!'
    cy.get('[data-qa="account-created"]').should('contain', 'Account Created!');

    // 15. Clica em Continue
    cy.get('[data-qa="continue-button"]').click();

    // 16. Valida 'Logged in as username'
    cy.validarLogadoComo(nome);

    // 17-18. Deleta a conta e valida 'ACCOUNT DELETED!'
    cy.deletarConta();
  });
});
