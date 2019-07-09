describe('Login Admin',() => {
  it('Visits a page', () => {
    cy.visit('http://localhost:3300/login');
  });

  it('Negative test case when Username is empty', () => {

      cy.get('#username')
        .type(' ');

        cy.get('#password')
        .type('password')

        cy.get('button')
          .eq(0)
          .should('be.disabled');
  });

  it('Negative test case when username does not exist', () => {

    cy.get('#username')
      .clear()
      .type('tamara.popov18negativetest@gmail.com');

    cy.get('#password')
      .clear()
      .type('password');

    cy.get('button')
      .eq(0)
      .click();

      cy.get('button')
        .should('be.disabled');
      cy.get('#username-error')
        .contains('Email does not match an existing account');
  });

  it('Negative test case with wrong password', () => {

    cy.get('#username')
      .clear()
      .type('tamara.popov18@gmail.com')

    cy.get('#password')
      .clear()
      .type('13456789');

    cy.get('button')
      .eq(0)
      .click();

      cy.get('#password-error')
        .contains('Password is incorrect');
  });

  it('Negative case with invalid email and password', () => {

    cy.get('#username')
      .clear()
      .type('test.invalid.email');

    cy.get('#password')
      .clear()
      .type('test password');

    cy.get('button')
      .eq(0)
      .should('be.disabled');

    cy.get('#username-error')
      .contains('Please enter a valid email address')
  })

  it('Positive test case', () => {

    cy.get('#username')
      .clear()
      .type('tamara.popov18+admin@gmail.com');

    cy.get('#password')
      .clear()
      .type('password');

    cy.get('button')
      .eq(0)
      .click();
  });

  it('Logged user needs to be on Mechanics list page', () => {
      cy.url().should('include', '/admin/mechanics')
  })
});
