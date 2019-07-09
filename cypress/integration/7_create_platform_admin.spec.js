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

        cy.get('#type')
          .select('Platform Admin').should('have.value', 'PLATFORM_ADMIN')

        cy.get('#firstName')
          .type('Cypress');

        cy.get('#lastName')
          .type('Test1');

        cy.get('#phone')
          .type('12345677890');

        cy.get('#email')
          .type('tamara.popov18+admin@gmail.com')

        cy.get('button')
          .contains('Create')
          .click();

        cy.get('#react-aria-modal-dialog')
          .contains('An Admin User account using this e-mail already exists.');

          cy.get('button')
            .contains('OK')
            .click();
    })
  })
