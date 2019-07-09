var Chance = require('chance');

describe('Create new AOG case', () => {

  var chance = new Chance();

  it('Visits a page', () => {

    cy.visit('http://localhost:3300/login')

    cy.get('#username')
      .type('tamara.popov18+controller@gmail.com');

    cy.get('#password')
      .type('password');

    cy.get('button')
      .eq(0)
      .click();

    //it('Controller needs to be on Cases dashboard after login', () => {
      cy.url().should('eq', 'http://localhost:3300/cases');
    //})

      cy.get('#newCaseBtn')
        .contains('New case')
        .click({force: true});

    //New case form
    cy.url().should('eq', 'http://localhost:3300/cases');

    var i = chance.integer({min: 0, max: 9});
    var k = chance.integer({min: 0, max: 9});

    cy.get('#tail')
      .type('f');

      cy.get('#autocompleteList')
        .within(() => {
          cy.get('button')
            .eq(i)
            .click();
          });

      cy.get('#station')
        .type('b');

        cy.get('#autocompleteList')
          .within(() => {
            cy.get('button')
              .eq(k)
              .click();
          });


          cy.get('#discrepancy')
            .type('Tamara Test CY');

          cy.get('button')
            .contains('Find mechanics')
            .should('be.enabled')
            .click();
  })
})
