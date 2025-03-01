describe('5 Verify Checkbox', () => {
    it('5.a Checkbox', () => {
        cy.visit('https://the-internet.herokuapp.com/')  
        cy.get('ul li').eq(5).click(15,10) 
    
        //verify if checkbox is unchecked (false) or checked (true)
        cy.get('#checkboxes input[type="checkbox"]').eq(0).invoke('prop', 'checked').should('be.false')
        cy.get('#checkboxes input[type="checkbox"]').eq(1).invoke('prop', 'checked').should('be.true')
    
    
        // determine if check is "unchecked" or "checked"
        cy.get('#checkboxes input[type="checkbox"]').eq(0).invoke('prop', 'checked').then((isCheckedBol) => {
          let isChecked;
          if (isCheckedBol){
            isChecked = 'checked';
          }else{
            isChecked = 'unchecked';
          }
          cy.log('The check box is ' + isChecked+'.');
        })
    
      })

})