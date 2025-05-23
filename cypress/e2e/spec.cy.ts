describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3000/');
  });

  it('devrait afficher Remix', () => {
    cy.contains('Welcome to').should('be.visible');
  });
});
