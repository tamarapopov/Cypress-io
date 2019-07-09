describe('Create controller',() => {
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
          .contains('Create')
          .click();

          //Confirmation modal
        cy.get('#react-aria-modal-dialog')
          .contains('User created!');

          cy.get('a')
            .contains('Create New')
            .click();
        //New Creation form
        cy.get('#type')
          .contains('Select an option');

          cy.get('#firstName')
            .should('be.empty');

          cy.get('#lastName')
            .should('be.empty');
          cy.get('#phone')
            .should('be.empty');

          cy.get('#email')
            .should('be.empty');

          cy.get('button')
            .contains('Create')
            .should('be.disabled');

            cy.get('button')
              .contains('Cancel')
              .click();

            cy.url().should('include', 'admin/mocs/:scope');
    })
  })
