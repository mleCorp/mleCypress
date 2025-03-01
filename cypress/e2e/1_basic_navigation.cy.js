describe('1 Basic Navigation', () => {

    it('1.a Visit, Click, and Find', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('A/B Testing').click() 
        
        // This is to find using div class "example" and div container wherre it will find for exact test A/B Test Variation 1
        // This page sometimes load "A/B Test Variation 1" or "A/B Test Control"
        cy.get('div.example').find('h3').then((version) => {
          if(version.text().includes('A/B Test Variation 1')){
            cy.log('This is version 1');
          }else{
            cy.log('This is version 2');
          }
        })  
      })

    // Test Case 2 - Find Using length
    it('1.b Find Using length', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        
        cy.get('ul li').eq(1).invoke('text').then((txt) => {
          cy.log('The text of the second li is: ' + txt);
        })
    
        // click (15,20) (15px from the left and 20px from the top)
        // Adding a coordinate on click
        cy.get('ul li').eq(1).click(15,10) 
        
    
        cy.contains('Add Element').click()
        cy.contains('Add Element').click()
        cy.contains('Add Element').click()
    
        // its('length') determines the number of element
        // In this scenario I click on the 'Add Element' 3 times
        // where it will return 3 buttons in '.added-manually
          cy.get('.added-manually').its('length').then((lenbutton) => {
            cy.log(lenbutton);
          })
    
      })

})