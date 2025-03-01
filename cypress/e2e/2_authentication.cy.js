describe('2 Authentication', () => {
    
      it('2.a Authentication', () => {
        cy.visit('https://the-internet.herokuapp.com/', {
          auth: {
            username: 'admin',
            password: 'admin'
          }})
          cy.get('ul li').eq(2).click(15,10)
          cy.contains('Congratulations! You must have the proper credentials.')
          cy.wait(2000)
          cy.clearAllCookies()
        })

      it('2.b Force 401', () => {
        cy.intercept('GET', 'https://the-internet.herokuapp.com/basic_auth', {
          statusCode: 401,
          body: 'Not authorized'
        }).as('unauthorized');
      })
})