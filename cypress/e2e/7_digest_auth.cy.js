describe('7 Digest Host', () => {
    // Test Case 7 - Digest Auth -- was not able to fix this yet
    it('7 Digest Auth', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        
        cy.contains('Digest Authentication').click();
        cy.task('digestAuthLogin', {
                url: 'https://the-internet.herokuapp.com/digest_auth',
                user: 'admin',
                pass: 'admin'
                }).then((cookies) => {
                    cookies.forEach((cookieStr) => {
                    const cookieParts = cookieStr.split(';')[0].split('=');
                    cy.setCookie(cookieParts[0], cookieParts[1]);
                    })
                }).then(() => {
                  cy.visit('https://the-internet.herokuapp.com/digest_auth');
                  cy.contains('Congratulations! You must have the proper credentials.');
                  cy.clearAllCookies()
                })
    })
        
})