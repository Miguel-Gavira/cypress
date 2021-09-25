describe('componente suma', () => {
  beforeEach(() => {
    cy.viewport(1200, 800);
    cy.visit('/');
  });
  it('sumo 1 más 2 y veo 3', () => {
    // Set up
    cy.get('#sumando1').type(1);
    cy.get('#sumando2').type(2);

    // Act
    // Assert
    cy.get('#resultado').should('contain', 3);
  });
  it('sumo 1 más 2 y veo 4', () => {
    // Set up
    cy.get('#sumando1').type(1);
    cy.get('#sumando2').type(2);

    // Act
    // Assert
    cy.get('#resultado').should('contain', 4);
  });
});
