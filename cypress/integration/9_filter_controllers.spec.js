describe('Filter controller',() => {
  it('Visits a page', () => {
    cy.visit('http://localhost:3300/login');
    cy.get('#username')
      .type('tamara.popov18@gmail.com');

    cy.get('#password')
      .type('password');

    cy.get('button')
      .eq(0)
      .click();

    //Goes to Admin Users
        cy.get('a')
          .contains('Controllers')
          .click();

    //Select search criteria
        cy.get('._gqa1kc')
          .select('HOP').should('have.value', 'HOP');
    })
  })
