describe('6 Verify Context Menu', () => {
    it('Context Menu', () => {
        cy.visit('https://the-internet.herokuapp.com/')  
        cy.get('ul li').eq(6).click(15,10) 
        cy.get('#hot-spot').rightclick();
        
        cy.on('window:alert', (alertText) => {
          expect(alertText).to.equal('You selected a context menu'); // Replace with actual alert text
        });
    
      })
})