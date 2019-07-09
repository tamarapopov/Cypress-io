describe('Forgot password test cases',() => {
  it('Visits a page', () => {
    cy.visit('http://localhost:3300/login');
  });

  it('Negative test case with empty username field', () => {

    cy.get('button')
      .eq(1)
      .click();

    cy.get('button')
      .contains('Send')
      .should('be.disabled');
  });

  it('Negative test case with invalid Email', () => {

    cy.get('#username')
      .type('test.test.te');

    cy.get('button')
      .contains('Send')
      .should('be.disabled');
  });

  it('Cancel reset password', () => {

    cy.get('#username')
      .clear()
      .type('popov+admin@work.co');

    cy.get('a')
      .click()
      .url().should('eq', 'http://master.qa.embraer-web.on.work.co/login');
  });

  it('Request for Reset password is sent', () => {

    cy.get('#username')
      .clear()
      .type('popov+admin@work.co');

    cy.get('button')
      .eq(1)
      .click();

      cy.get('button')
        .should('be.enabled')
        .click();
  });

});
