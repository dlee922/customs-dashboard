describe('Simple Test', () => {
  it('Visits a page and checks the title', () => {
    cy.visit('https://example.com');
    cy.title().should('include', 'Example Domain');
  });

  it('Checks if a button exists', () => {
    cy.visit('https://example.com');
    cy.get('h1').should('contain', 'Example Domain');
  });
});
