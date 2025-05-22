describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('devrait afficher Remix', () => {
    cy.contains('Welcome to').should('be.visible');
  });
});
