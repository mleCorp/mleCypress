describe('8 Disappearing Elements', () => {
    it('Disappearing Elements', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get('ul li').eq(8).click(15,10)
    cy.get('ul li').its('length').then((numberOfButtons) => { // determine the length of buttons
      cy.log('Total Number of Buttons = ' + numberOfButtons); 
      const clickThisButton = numberOfButtons - 1; // since its array - I had to deduct 1 (for the last button)
      cy.get('ul li').eq(clickThisButton).click() // using const clickThisButton as to demo const in testing
    })

  })
})