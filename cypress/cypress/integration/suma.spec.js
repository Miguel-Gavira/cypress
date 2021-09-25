describe('componente suma', () => {
  beforeEach(() => {
    cy.viewport(1200, 800);
    cy.visit('/');
    // cy.intercept('GET', '/api/v2/transport/catalogue/availability/*').as(
    //   'voucher'
    // );
  });
  it('sumo 1 más 2 y veo 3', () => {
    // cy.wait('@voucher', { timeout: 100_000 });
    // Set up
    cy.get('#sumando1').type(1);
    cy.get('#sumando2').type(2);

    // Act
    // Assert
    cy.get('#resultado').should('contain', 3);
  });
  xit('sumo 1 más 2 y veo 4', () => {
    // Set up
    cy.get('#sumando1').type(1);
    cy.get('#sumando2').type(2);

    // Act
    // Assert
    cy.get('#resultado').should('contain', 4);
  });
});
