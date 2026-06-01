// ***********************************************************
// Arquivo de suporte carregado automaticamente antes dos testes
// ***********************************************************

// Suprime erros de JS não capturados do site (ads, trackers, etc.)
Cypress.on('uncaught:exception', () => false);

// Comandos globais
import './commands';

// Comandos por domínio
import './navigation_commands';
import './home_commands';
import './auth_commands';
import './cart_commands';
import './modal_commands';
import './products_commands';
import './contact_commands';
