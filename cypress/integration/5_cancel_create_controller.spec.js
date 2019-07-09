describe('Create controller',() => {
  it('Visits a page', () => {
    cy.visit('http://localhost:3300/login');
    cy.get('#username')
      .type('tamara.popov18+admin@gmail.com');

    cy.get('#password')
      .type('password');

    cy.get('button')
      .eq(0)
      .click();

    //Goes to Admin Users
      cy.get('a')
        .contains('Controllers')
        .click();

      cy.get('a')
        .contains('Add controller')
        .click();

       //Create controller form
        cy.get('#airline')
          .select('HOP').should('have.value', 'HOP')

        cy.get('#firstName')
          .type('Test1');

        cy.get('#lastName')
          .type('Controller');

        cy.get('#phone')
          .type('1234567890');

        cy.get('#email')
          .type('tamara.popov18+controller@gmail.com')

        cy.get('button')
          .contains('Cancel')
          .click();

          //Check url
          cy.url().should('include', 'admin/mocs/:scope')

    })
  })
