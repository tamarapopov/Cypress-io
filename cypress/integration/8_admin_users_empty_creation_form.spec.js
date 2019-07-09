describe('Create new platform admin user',() => {
  it('Visits a page', () => {
    cy.visit('http://localhost:3300/login');
    cy.get('#username')
      .type('tamara.popov18@gmail.com');

    cy.get('#password')
      .type('password');

    cy.get('button')
      .eq(0)
      .click();
    //});

    //it('Goes to Admin Users',()=>{
      cy.get('a')
        .contains('Admin Users')
        .click();

      cy.get('a')
        .contains('Add user')
        .click();

        cy.get('button')
          .contains('Create')
          .should('be.disabled');

    })
  })
