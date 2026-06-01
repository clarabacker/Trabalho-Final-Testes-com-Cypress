# Trabalho Final — Automação de Testes com Cypress

## 👥 Integrantes do Grupo

- **Matheus** — RA: xxxxxxxxx
- **Integrante 2** — RA: xxxxxxxxx
- **Integrante 3** — RA: xxxxxxxxx

> ⚠️ Substitua os nomes e RAs acima pelos dados reais antes de entregar.

---

## 📋 Cenários de Teste Implementados

Site testado: [AutomationExercise.com](https://www.automationexercise.com)  
Referência dos casos: https://www.automationexercise.com/test_cases

| Arquivo | Caso de Teste |
|---|---|
| `register-user.cy.js` | TC 1 — Registrar usuário |
| `login-correct-credentials.cy.js` | TC 2 — Login com credenciais corretas |
| `login-incorrect-credentials.cy.js` | TC 3 — Login com credenciais incorretas |
| `logout-user.cy.js` | TC 4 — Logout de usuário |
| `register-existing-email.cy.js` | TC 5 — Cadastro com email já existente |
| `contact-us-form.cy.js` | TC 6 — Formulário de contato |
| `verify-test-cases-page.cy.js` | TC 7 — Página de Test Cases |
| `verify-all-products.cy.js` | TC 8 — Todos os produtos e detalhe |
| `search-product.cy.js` | TC 9 — Pesquisa de produto |
| `subscription-home.cy.js` | TC 10 — Inscrição na newsletter (home) |
| `add-products-to-cart.cy.js` | TC 12 — Adicionar produtos ao carrinho |
| `remove-products-from-cart.cy.js` | TC 17 — Remover produtos do carrinho |
| `add-to-cart-from-recommended-items.cy.js` | TC 22 — Adicionar item recomendado ao carrinho |

---

## 🗂️ Estrutura do Projeto

```
projeto-final/
├── cypress/
│   ├── e2e/                                  # Specs de teste (1 arquivo por caso)
│   │   ├── register-user.cy.js               # TC 1
│   │   ├── login-correct-credentials.cy.js   # TC 2
│   │   ├── login-incorrect-credentials.cy.js # TC 3
│   │   ├── logout-user.cy.js                 # TC 4
│   │   ├── register-existing-email.cy.js     # TC 5
│   │   ├── contact-us-form.cy.js             # TC 6
│   │   ├── verify-test-cases-page.cy.js      # TC 7
│   │   ├── verify-all-products.cy.js         # TC 8
│   │   ├── search-product.cy.js              # TC 9
│   │   ├── subscription-home.cy.js           # TC 10
│   │   ├── add-products-to-cart.cy.js        # TC 12
│   │   ├── remove-products-from-cart.cy.js   # TC 17
│   │   └── add-to-cart-from-recommended-items.cy.js # TC 22
│   ├── fixtures/
│   │   ├── usuarios.json                     # Dados de autenticação
│   │   └── example.json
│   └── support/
│       ├── e2e.js                            # Setup global
│       ├── commands.js                       # Base de comandos
│       ├── auth_commands.js                  # Login, signup, logout, delete
│       ├── cart_commands.js                  # Validação do carrinho
│       ├── contact_commands.js               # Formulário de contato
│       ├── home_commands.js                  # Validação da home
│       ├── modal_commands.js                 # Modais (Continue/View Cart)
│       ├── navigation_commands.js            # Navegação entre páginas
│       └── products_commands.js              # Interação com produtos
├── cypress.config.js
├── package.json
├── .eslintrc.json
├── .prettierrc
└── .nvmrc
```

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) v24.15.0 (conforme `.nvmrc`) ou superior
- npm (incluído com Node.js)

---

## 🚀 Como Executar

### 1. Instalar dependências

```bash
npm install
```

### 2. Abrir o Cypress (modo interativo)

```bash
npm run cypress:open
```

### 3. Executar todos os testes (headless)

```bash
npm test
```

### 4. Linting e formatação

```bash
npm run lint       # verifica problemas de estilo
npm run lint:fix   # corrige automaticamente
npm run format     # formata com Prettier
```

---

## ⚠️ Observação sobre TC 2 e TC 4

Os **Test Cases 2 e 4** dependem de uma conta pré-existente no site.

**Antes de executar**, crie uma conta manualmente em https://www.automationexercise.com/login e atualize o arquivo `cypress/fixtures/usuarios.json`:

```json
{
  "usuarioExistente": {
    "nome": "Seu Nome Cadastrado",
    "email": "seu@email.com",
    "senha": "SuaSenha"
  }
}
```

> 📌 O **TC 2 deleta a conta** ao final — será necessário recriar antes de rodar o TC 4 isoladamente.

---

## 📚 Referências

- [Documentação oficial do Cypress](https://docs.cypress.io/app/get-started/why-cypress)
- [AutomationExercise — Test Cases](https://www.automationexercise.com/test_cases)
