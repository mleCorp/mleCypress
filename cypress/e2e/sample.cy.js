describe('My First Test', () => {
    it('Visits the Cypress Demo Page', () => {
      cy.visit('/')
      cy.contains('type').click()
      cy.url().should('include', '/commands/actions')
    })
  })