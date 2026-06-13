import './commands';

Cypress.on('uncaught:exception', () => {
  return false;
});

beforeEach(() => {
  cy.viewport(1366, 768);
  cy.visit('/', { failOnStatusCode: false });
});
