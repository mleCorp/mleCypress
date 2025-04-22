describe('9 Drag and Drop', () => {
    it('Drag and Drop', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get('ul li').eq(9).click(15,10)
  
        cy.get('.column').eq(1).invoke('text').then((text) => {
          cy.log('The Last Column is ' + text);
        });
  
        const dataTransfer = new DataTransfer();
        cy.get('#column-a').trigger('dragstart', { dataTransfer })
        cy.get('#column-b').trigger('drop', { dataTransfer })
        cy.get('#column-a').trigger('dragend')
  
        cy.get('.column').eq(1).invoke('text').then((text) => {
          cy.log('The Last Column is ' + text);  
        });
        
        cy.get('#column-a').trigger('dragstart', { dataTransfer })
        cy.get('#column-b').trigger('drop', { dataTransfer })
        cy.get('#column-a').trigger('dragend')
  
          cy.get('.column').eq(1).invoke('text').then((text) => {
            cy.log('The Last Column is ' + text);  
          });
          
  
      })
  
})