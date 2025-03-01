describe('4 Challenging DOM', () => {
    it('4.a First Row', () => {
        cy.visit('https://the-internet.herokuapp.com/')  
        cy.get('ul li').eq(4).click(15,10) 
    
        cy.get('table tbody tr').first().invoke('text').then((firstRow) => {
          cy.log('The first row is :' +firstRow)
        })
      })
    
      it('4.b Last Row', () => {
        cy.visit('https://the-internet.herokuapp.com/')  
        cy.get('ul li').eq(4).click(15,10) 
    
        cy.get('table tbody tr').last().invoke('text').then((lastRow) => {
          cy.log('The last row is :' +lastRow)
        })
      })
    
      // eq(2) index = 3rd
      it('4.c Third Row', () => {
        cy.visit('https://the-internet.herokuapp.com/')  
        cy.get('ul li').eq(4).click(15,10) 
    
        cy.get('table tbody tr').eq(2).invoke('text').then((thirdRow) => {
          cy.log('The third row is :' +thirdRow)
        })
      })
      it('4.d Third Row Fourth Column', () => {
        cy.visit('https://the-internet.herokuapp.com/')  
        cy.get('ul li').eq(4).click(15,10) 
    
        cy.get('table tbody tr').eq(2).find('td').eq(3).invoke('text').then((thirdRowFourthColumn) => {
          cy.log('The third row is :' +thirdRowFourthColumn)
        })
      })
})