var Chance = require('chance');

describe('Deactivate controller', () => {
  var chance = new Chance();
  it('Visits a page', () => {
    cy.visit('http://localhost:3300/login');
    cy.get('#username')
      .type('tamara.popov18@gmail.com');

    cy.get('#password')
      .type('password');

    cy.get('button')
      .eq(0)
      .click();

      cy.get('a')
        .contains('Controllers')
        .click();

        var i = chance.integer({min: 0, max: 9});

        cy.log(i);
        cy.wait(2000);

        cy.get('table')
          .within(() => {
            cy.get('button')
              .eq(i)
              .click({force: true});

              cy.get('button')
                .contains('Deactivate')
                .click();
           });
                cy.get('#react-aria-modal-dialog')
                  .contains('Are you sure?');

                  cy.get('button')
                    .contains('Ok')
                    .click();

                      cy.get('a')
                        .contains('Inactive')
                        .click();

  })
})
