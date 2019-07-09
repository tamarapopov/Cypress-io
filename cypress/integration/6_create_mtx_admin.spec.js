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

    //Goes to Admin Users
      cy.get('a')
        .contains('Admin Users')
        .click();

      cy.get('a')
        .contains('Add user')
        .click();

       //Create user form
        cy.get('#type')
          .select('MTX Provider Admin').should('have.value', 'MRO_ADMIN')

        cy.get('#organization')
          .select('HOP').should('have.value', 'HOP')

        cy.get('#firstName')
          .type('Test4');

        cy.get('#lastName')
          .type('MTX');

        cy.get('#phone')
          .type('0691305093');

        cy.get('#email')
          .type('tamara.popov18+mtx@gmail.com')

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

            cy.url().should('include', 'admin/users')
    })
  })
