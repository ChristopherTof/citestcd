describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
  });

  it('devrait afficher Remix', () => {
    cy.contains('Welcome to').should('be.visible');
  });
});
