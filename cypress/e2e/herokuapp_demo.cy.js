describe('The herokuapp Test', () => {

    /*
    
      // Test Case 1 - Click and Find Version
      it('Click and Find Version', () => {
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
      it('Find Using length', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        
        cy.get('ul li').eq(1).invoke('text').then((txt) => {
          cy.log('The text of the second li is: ' + txt);
        })
    
        cy.get('ul li').eq(1).click(15,10) // click (15,20) (15px from the left and 20px from the top)
        //cy.contains('Add Element').click()
        
    
        cy.contains('Add Element').click()
        cy.contains('Add Element').click()
        cy.contains('Add Element').click()
    
          cy.get('.added-manually').its('length').then((lenbutton) => {
            cy.log(lenbutton);
          })
    
      })
    
      // Test Case 3 - Basic Authentication
      it('Basic Authentication', () => {
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
    
      // Test Case 4 - Broken Image
        it('Broken Image', () => {
          cy.visit('https://the-internet.herokuapp.com/')
          cy.contains('Broken Images').click()
          cy.contains('Powered by Elemental Selenium')
          cy.get('div.example img').eq(2).should('be.visible')
    
          cy.get('div.example img').eq(1).then(($imgT) => {
            const naturalWidth = $imgT[0].naturalWidth;
            cy.log('Image natural width:', naturalWidth);
            if (naturalWidth === 0) {
              cy.log('The image is broken.');
            } else {
              cy.log('The image loaded correctly.');
            }
          })
    
          })
    
        
      // Test Case 5 - Challenging DOM
      it('Challenging DOM', () => {
        cy.visit('https://the-internet.herokuapp.com/')  
        cy.get('ul li').eq(4).click(15,10) 
        cy.get('table tbody tr').eq(3).find('a[href="#delete"]').click()
        cy.get('div.large-2.columns a.button').eq(0).click() //clicks the first button regardless if the ID or Value name changes
        // OR cy.get('div.large-2.columns a.button').first.click()
      })
    
      // Test Case 6 - Checkbox
      it('Checkbox', () => {
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
    
      // Test Case 6 - Context Menu
      it('Context Menu', () => {
        cy.visit('https://the-internet.herokuapp.com/')  
        cy.get('ul li').eq(6).click(15,10) 
        cy.get('#hot-spot').rightclick();
        
        cy.on('window:alert', (alertText) => {
          expect(alertText).to.equal('You selected a context menu'); // Replace with actual alert text
        });
    
      })
    
      
       // Test Case 7 - Digest Auth -- was not able to fix this yet
       it('Digest Auth', () => {
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
        
    
        // Test Case 8 - Disappearing Elements
        it('Disappearing Elements', () => {
          cy.visit('https://the-internet.herokuapp.com/')
          cy.get('ul li').eq(8).click(15,10)
          cy.get('ul li').its('length').then((numberOfButtons) => { // determine the length of buttons
            cy.log('Total Number of Buttons = ' + numberOfButtons); 
            const clickThisButton = numberOfButtons - 1; // since its array - I had to deduct 1 (for the last button)
            cy.get('ul li').eq(clickThisButton).click() // using const clickThisButton as to demo const in testing
          })
    
        })
        
    
        // Test Case 9 - Drag and Drop
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
    
        
    
        // Test Case 10 - Dropdown
        it('Dropdown', () => {
          cy.visit('https://the-internet.herokuapp.com/')
          cy.get('ul li').eq(10).click(15,10)
          cy.get('select#dropdown')  
          .select('2')
          .should('have.value', '2')
    
          cy.get('select#dropdown option:selected')  
          .invoke('text')
          .then((optionValue) => {
            cy.log('You have select ' + optionValue);
          })
          
          })
    
        
          // Test Case 11 - Dynamic Content
        it('Dynamic Content', () => {
          cy.visit('https://the-internet.herokuapp.com/')
          cy.get('ul li').eq(11).click(15,10)
          cy.contains('click here').click()
          
          // the content rows are inside the #content div
          cy.get('#content > .row').its('length').then((tableRow) => {
            cy.log('There are '+tableRow +' rows in this table')
          })
    
          cy.get('#content > .row').eq(2).find('.large-10.columns').invoke('text').then((colText) => {
            cy.log('The text in the 3rd row is showing: '+colText)
          })
    
          })
    
    
          
          // Test Case 12 - Dynamic Controls
        it('Dynamic Controls', () => {
          cy.visit('https://the-internet.herokuapp.com/')
          cy.get('ul li').eq(12).click(15,10)
          
          cy.get('#checkbox-example button')
          .should('be.enabled')
    
          cy.get('#checkbox-example button')
          .click()
          .should('be.disabled')
    
          cy.wait(3000)
          cy.get('#checkbox-example button').invoke('text').then((thisButton) => {
            cy.log('Button text is: ' + thisButton);
          })
    
          cy.get('#checkbox-example button').click();
    
          // Wait for the loading indicator to appear and then disappear
          cy.get('#loading').should('be.visible')
    
    
          // Now you can continue with further assertions, e.g. verifying the button text changed
          cy.get('#checkbox-example button').should('have.text', 'Remove')
          cy.get('#message').should('contain.text', "It's back!")
          })
    
          
        // Test Case 13 - Dynamic Loading
        it('Dynamic Loading', () => {
          cy.visit('https://the-internet.herokuapp.com/')
          cy.get('ul li').eq(13).click(15,10)
          cy.contains('Dynamically Loaded Page Elements')
          
          cy.contains('Element on page that is hidden').click()
          cy.get('#start button').click()
          // Cypress default timeout is 4000 or 4 seconds
          // you could either use cy.wait(5000)  or timeout
          cy.get('#finish', { timeout: 5000 }).should('be.visible');
          cy.get('#finish h4').should('have.text', 'Hello World!')
    
          })
        
          
        // Test Case 14 - Entry Ad
        it('Entry Ad', () => {
          cy.visit('https://the-internet.herokuapp.com/')
          cy.get('ul li').eq(14).click(15,10)
          
          cy.get('.modal-body').then(($modal) => {
            if ($modal.is(':visible')) {
              // If the modal is visible, click the "Close" button.
              cy.get('.modal-footer p').click()
            } else {
              // If the modal is not visible, go back.
              cy.go('back')
            }
    
          })
    
          })
    
          
          // Test Case 15 - Exit Intent
        it('Exit Intent', () => {
          cy.visit('https://the-internet.herokuapp.com/')
          cy.get('ul li').eq(15).click(15,10)
          
          cy.get('.example h3').trigger('mouseout')
          })
    
          // Test Case 16 - Download
          const path = require('path');
          it('Download', () => {
            cy.visit('https://the-internet.herokuapp.com/')
            cy.get('ul li').eq(16).click(15,10)
            
            
            //BASIC download Test
            cy.contains('ISTQB_CTFL_Syllabus_v4.0.1.pdf').click();
            // Define the expected file name (adjust as necessary).
            const fileName = 'ISTQB_CTFL_Syllabus_v4.0.1.pdf';
    
            // Build the full path to the downloaded file.
            const downloadsFolder = Cypress.config('downloadsFolder');
            const filePath = path.join(downloadsFolder, fileName);
    
            // Optionally, wait for a short period to allow the download to complete.
            // You may need to adjust the timeout depending on the file size and network.
            cy.readFile(filePath, { timeout: 30000 }).should('exist');
            
            // Download Test With If Else Condition
            cy.get('a').eq(2).invoke('text').then((downloadFileName) => {
                const fileName = downloadFileName;
                const downloadsFolder = Cypress.config('downloadsFolder');
                const filePath = path.join(downloadsFolder, fileName);
    
                cy.task('fileExists', filePath).then((itExist) => {
                  if(itExist){
                    cy.log('It Exist')
                    cy.get('a').eq(3).click();
                  }else{
                    cy.log('It Does Not Exist')
                    cy.get('a').eq(2).click();
                  }
                })
            })
            
            // Much simplier code using itExist
            cy.get('a').eq(2).invoke('text').then((downloadFileName) => {
              const fileName = downloadFileName;
              const downloadsFolder = Cypress.config('downloadsFolder');
              const filePath = path.join(downloadsFolder, fileName);
    
              cy.task('fileExists', filePath).then((itExist) => {
                cy.log(itExist ? 'It Exist' : 'It Does Not Exist');
                cy.get('a').eq(itExist ? 3 : 2).click();
              })
          })
    
            })
            
           // Test Case 17 - File Upload 1
          it('File Upload 1', () => {
            cy.visit('https://the-internet.herokuapp.com/')
            cy.get('ul li').eq(17).click(15,10)
          
            const fileName = 'myFile.txt';
            cy.get('input#file-upload').attachFile(fileName);
            cy.get('input#file-submit').click();
    
    
          })
          // Test Case 17 - File Upload 2 - drag and drop
          it('File Upload 2', () => {
            cy.visit('https://the-internet.herokuapp.com/')
            cy.get('ul li').eq(17).click(15,10)
          
            const fileName = 'myFile.txt';
            cy.get("div#drag-drop-upload").attachFile(fileName, { subjectType: 'drag-n-drop' })
            cy.get('input#file-submit').click();
          })
    
          
          // Test Case 18 - Floating Menu
          it('Floating Menu', () => {
            cy.visit('https://the-internet.herokuapp.com/')
            cy.get('ul li').eq(18).click(15,10)
    
            // scroll example
            cy.scrollTo(0, 500); 
            cy.window().its('scrollY').should('equal', 500)
    
            // click based on location in body x,y
            cy.get('body').click(450, 55)
          
          })
    
          // Test Case 19 - Forgot Password
          it('Forgot Password', () => {
            cy.visit('https://the-internet.herokuapp.com/')
            cy.get('ul li').eq(19).click(15,10)
    
            cy.get('#email').type('email@gmail.com')
            cy.get('button').click()
          
          })
    
          // Test Case 20 - Form Authentication
          it('Form Authentication', () => {
            cy.visit('https://the-internet.herokuapp.com/')
            cy.get('ul li').eq(20).click(15,10)
    
            cy.get('#username').type('tomsmith')
            cy.get('#password').type('SuperSecretPassword!')
            cy.get('button').click()
            cy.contains('Welcome to the Secure Area.')
            cy.contains('Logout').click()
    
            cy.get('#username').type('tomsmith')
            cy.get('#password').type('incorrect!')
            cy.get('button').click()
            cy.contains('Your password is invalid!')
    
            cy.get('#username').type('incorrect')
            cy.get('#password').type('SuperSecretPassword!')
            cy.get('button').click()
            cy.contains('Your username is invalid!')
          
          })
    
          
         // Test Case 21 - Nested Frame
         it('Nested Frame', () => {
          cy.visit('https://the-internet.herokuapp.com/')
          cy.get('ul li').eq(21).click(15,10)
          cy.contains('a', 'Nested Frames').click()
    
          // Take note of the structure of the fram
          // from the page there are 2 frames:
          // frame-top AND frame-bottom
    
          // inside frame-top there is the:
          // frame-left
          // frame-middle
          // frame-right
    
          // need frame load and then iframe
          cy.frameLoaded('frame[name="frame-top"]')
          cy.iframe('frame[name="frame-top"]').within(() => {
            cy.frameLoaded('frame[name="frame-middle"]');
            cy.iframe('frame[name="frame-middle"]').should('contain.text', 'MIDDLE');
          })
        
        })
    
        
       // Test Case 22 - Geolocation
       it('Geolocation', () => {
    
        const expectedLatitude = 10.3317504;
        const expectedLongitude = 123.9056384;
    
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get('ul li').eq(22).click(15,10)
    
        cy.contains('button', 'Where am I?').click()
    
        cy.get('#lat-value').should('contain', expectedLatitude)
        cy.get('#long-value').should('contain', expectedLongitude)
        
      
      })
    
        
       // Test Case 23 - Horizontal Slider
       it('Horizontal Slider', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get('ul li').eq(23).click(15,10)
        
        cy.get('input[type="range"]').then($slider => {
          const min = parseFloat($slider.attr('min'));
          const max = parseFloat($slider.attr('max'));
          const midValue = (min + max) / 2;
    
          cy.wrap($slider).invoke('val', midValue).trigger('change');
        });
    
        cy.get('#range').should('have.text', '2.5')
      
        //or directly invoke value
        cy.get('input[type="range"]')
          .invoke('val', 4)
          .trigger('change')
        cy.get('#range').should('have.text', '4')
      })
    
      
      // Test Case 24 - Hover
      it('Hover', () => {
       cy.visit('https://the-internet.herokuapp.com/')
       cy.get('ul li').eq(24).click(15,10)
       
       cy.get('.figure').eq(1).find('a').should('be.hidden')
    
       cy.get('.figure').eq(1).trigger('mouseover', { force: true })
       //cy.get('.figure').eq(1).find('a').should('be.visible')
       cy.get('.figure').eq(1).find('a').click({ force: true })
       cy.url().should('include', '/users/2')
       cy.go('back')
    
       cy.get('.figure').eq(1).realHover()
       cy.get('.figure').eq(1).invoke('show', { force: true })
       cy.get('.figure').eq(1).find('a').click()
       cy.go('back')
    
       cy.get('.figure').eq(1).trigger('mouseenter').trigger('mouseover')
       cy.get('.figure').eq(1).invoke('show', { force: true })
       cy.get('.figure').eq(1).find('a').click()
       
    
     })
    
     
     // Test Case 24 - Hover
     it('Hover', () => {
      cy.visit('https://the-internet.herokuapp.com/')
      cy.get('ul li').eq(24).click(15,10)
      
      cy.get('.figure').eq(1).find('a').should('be.hidden')
    
      cy.get('.figure').eq(1).trigger('mouseover', { force: true })
      //cy.get('.figure').eq(1).find('a').should('be.visible')
      cy.get('.figure').eq(1).find('a').click({ force: true })
      cy.url().should('include', '/users/2')
      cy.go('back')
    
      cy.get('.figure').eq(1).realHover()
      cy.get('.figure').eq(1).invoke('show', { force: true })
      cy.get('.figure').eq(1).find('a').click()
      cy.go('back')
    
      cy.get('.figure').eq(1).trigger('mouseenter').trigger('mouseover')
      cy.get('.figure').eq(1).invoke('show', { force: true })
      cy.get('.figure').eq(1).find('a').click()
      
    
    })
    
    
    // Test Case 25 - Infinite Scroll
    it('Infinite Scroll', () => {
      cy.visit('https://the-internet.herokuapp.com/');
      cy.get('ul li').eq(25).click(15, 10); // Click on the 25th menu item
    
      // Function to scroll multiple times and wait for content to load
      const scrollAndWait = (times) => {
        Array.from({ length: times }).forEach((_, i) => {
          cy.window().scrollTo('bottom');
          cy.wait(2000); // Wait for new content to load
          cy.log(`Scrolled ${i + 1} time(s)`);
        });
      };
    
      scrollAndWait(3); // Scroll 3 times
      cy.log('End of the scroll loop');
    
      // Count the number of added messages
      cy.get('.jscroll-added').then(($messages) => {
        cy.log(`There are ${$messages.length} rows of messages`);
      });
    
      // Extract the first message's first 5 words
      cy.get('.jscroll-added').first().invoke('text').then((text) => {
        cy.log(`The first message is: ${text.trim().split(' ').slice(0, 5).join(' ')}`);
      });
    
      // Extract the last message's first 5 words
      cy.get('.jscroll-added').last().invoke('text').then((text) => {
        cy.log(`The last message is: ${text.trim().split(' ').slice(0, 5).join(' ')}`);
      });
    })
    
    
    // Test Case 26 - Input
    it('Input', () => {
      cy.visit('https://the-internet.herokuapp.com/');
      cy.get('ul li').eq(26).click(15, 10); 
      
      cy.get('input[type="number"]').type('{uparrow}')
    
      const clickM = 5;
      for (let i = 1; i < clickM; i++) {
        cy.get('input[type="number"]').type('{uparrow}')
      }
    })
    
    
    // Test Case 27 - JQueryUI - Menu
    it('JQueryUI - Menu', () => {
      const path = require('path');
      cy.visit('https://the-internet.herokuapp.com/');
      cy.get('ul li').eq(27).click(15, 10); 
      
      cy.contains('Enabled').trigger('mouseover', {force: true})
      cy.contains('Downloads').trigger('mouseover', {force: true})
      
     
      cy.contains('PDF').trigger('mouseover', {force: true}).invoke('attr', 'href').then((jqueryMenu) => {
        const fileNameJ = jqueryMenu.replace('/download/jqueryui/menu/','')
        const downloadsFolder = Cypress.config('downloadsFolder');
        const filePath = path.join(downloadsFolder, fileNameJ);
        
        cy.task('fileExists', filePath).then((itExist) => {
        
          if(itExist){
            cy.log('File does exist, no need to download')
          }else{
            cy.log('File does not exist. Need to download')
            cy.contains('PDF').trigger('mouseover', {force: true}).click({force: true})
          }
        })
      })
    })
    
    // Test Case 28 - JavaScript Alerts 
    it('JavaScript Alerts 1', () => {
      cy.visit('https://the-internet.herokuapp.com/');
      cy.get(':nth-child(29) > a').click()
    
      
      cy.get(':nth-child(1) > button').click()
      cy.on('window:alert', (alertText) => {
        expect(alertText).contains('I am a JS Alert')
        return true
      })
      cy.contains('You successfully clicked an alert')
     
    })
    
    it('JavaScript Alerts 2', () => {
      cy.visit('https://the-internet.herokuapp.com/');
      cy.get(':nth-child(29) > a').click()
    
      cy.get(':nth-child(2) > button').click()
      cy.on('window:confirm', (alertText) => {
        expect(alertText).contains('I am a JS Confirm')
        return true;   
      })
      cy.contains('You clicked: Ok') 
    })
    
    it('JavaScript Alerts 3', () => {
      cy.visit('https://the-internet.herokuapp.com/');
      cy.get(':nth-child(29) > a').click()
    
      cy.get(':nth-child(2) > button').click()
      cy.on('window:confirm', (alertText) => {
        expect(alertText).contains('I am a JS Confirm')
        return false;   
      })
      cy.contains('You clicked: Cancel')
     
    })
    
    it('JavaScript Alerts 4', () => {
      cy.visit('https://the-internet.herokuapp.com/'); 
      cy.get(':nth-child(29) > a').click()
    
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('This is my promt message.');
        cy.get(':nth-child(3) > button').click()
    })
    })
    
    it('JavaScript Alerts 5', () => {
      cy.visit('https://the-internet.herokuapp.com/'); 
      cy.get(':nth-child(29) > a').click()
    
      cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('null'); // return null simulates clicking cancel
        cy.get(':nth-child(3) > button').click()
    })
      cy.contains('You entered: null')
    
    })
      
     //Test Case 31  - Key Presses
    it('Key Presses 1', () => {
      cy.visit('https://the-internet.herokuapp.com/'); 
      cy.get(':nth-child(31) > a').click()
    
      cy.get('body').type('{enter}'); // Step 1: Press Enter key press
    
      cy.get('#result') // Step 2: Verify result
          .should('be.visible')
          .and('contain', 'You entered: ENTER');
    })
    
    it('Key Presses 2', () => {
      cy.visit('https://the-internet.herokuapp.com/'); 
      cy.get(':nth-child(31) > a').click()
    
      cy.get('body').type('{alt}'); // Step 1: Press Enter key press
    
      cy.get('#result') // Step 2: Verify result
          .should('be.visible')
          .and('contain', 'You entered: ALT');
    })
    
    
    //Test Case 32  - Large & Deep DOM
    it('Large & Deep DOM', () => {
      cy.visit('https://the-internet.herokuapp.com/'); 
      cy.get(':nth-child(32) > a').click()
    
      cy.get('#siblings').within(() => {
        cy.get('div').eq(5).should('be.visible')
      })
      
      cy.get('#large-table').within(() => {
        cy.get('th').eq(5).should('be.visible')
        cy.get('tr').eq(5).should('be.visible')
        cy.get('tr').eq(6).find('td').eq(7).should('be.visible')
      })
    })
    
    
    //Test Case 33  - Open New Window
    it('Open New Window', () => {
      cy.visit('https://the-internet.herokuapp.com/'); 
      cy.get(':nth-child(33) > a').click()
    
      cy.contains('Click Here').invoke('removeAttr', 'target').click();
      
        cy.url().should('include', '/windows/new'); // Ensure it navigated correctly
        cy.contains('New Window').should('be.visible'); // Verify expected text
    })
    
    //Test Case 34  - Nested Frames
    it('Nested Frames', () => {
      cy.visit('https://the-internet.herokuapp.com/'); 
      cy.get(':nth-child(34) > a').click()
    
    
          cy.frameLoaded('frame[name="frame-top"]')
          cy.iframe('frame[name="frame-top"]').within(() => {
            cy.frameLoaded('frame[name="frame-middle"]');
            cy.iframe('frame[name="frame-middle"]').should('contain.text', 'MIDDLE');
          })
    })
    
    
    //Test Case 35  - Notification Message
    it('Notification Message', () => {
      cy.visit('https://the-internet.herokuapp.com/'); 
      cy.get(':nth-child(35) > a').click()
    
      for(let x = 0; x < 5; x++){
        cy.contains('Click here').click()
      cy.get('#flash-messages').invoke('text').then((notificationMessage) => {
        cy.log('The Notification message '+x+' is '+notificationMessage)
      })
      }  
    })
    
    //Test Case 36  - Redirect Link
    it('Redirect Link', () => {
      cy.visit('https://the-internet.herokuapp.com/'); 
      cy.get(':nth-child(36) > a').click()
      cy.get('#redirect').click()
    
      
      cy.get('ul li').eq(2).click(15,15)
       
      cy.url().then((url) => {
        cy.log(url); // Logs the current URL
    
        cy.request({
          method: 'GET',
          url: url,
          failOnStatusCode: false, // Prevents Cypress from failing on 4xx/5xx responses
        })
      .then((response) => {
        cy.log(response.status)
        //cy.log(response.body)
      })
      
      })
    
    })
    
    //Test Case 37  - Secure File Download
    it('Secure File Download', () => {
      cy.visit('https://the-internet.herokuapp.com/', {
        auth: {
          username: 'admin',
          password: 'admin'
        }})
     
      cy.get(':nth-child(37) > a').click()
    
      const path = require('path');
      cy.get('a').eq(2).invoke('text').then((downloadFileName) => {
    
        const fileName = downloadFileName;
        const downloadsFolder = Cypress.config('downloadsFolder');
        const filePath = path.join(downloadsFolder, fileName);
    
        cy.task('fileExists', filePath).then((itExist) => {
         
          cy.log(itExist ? 'It Exists, No Need to Download' : 'It Does Not Exist. Need to Download');
          if (!itExist) cy.get('a').eq(2).click();
    
        })
    })
    })
    
    //Test Case 38  - Shadow DOM
    it('Shadow DOM', () => {
      cy.visit('https://the-internet.herokuapp.com/')
      cy.get(':nth-child(38) > a').click()
    
    
      cy.get('my-paragraph')
      .contains("Let's have some different text!")
    
      cy.get('my-paragraph').eq(1) // Select the second <my-paragraph>
      .find('ul li') // Find the <li> inside the slotted <ul>
      .first() // Select the first list item
      .contains('have.text', "Let's have some different text!");
    
    })
    
    //Test Case 39  - Shifting Content Menu
    it('Shifting Content Menu', () => {
      cy.visit('https://the-internet.herokuapp.com/')
      cy.get(':nth-child(39) > a').click()
      cy.contains('Example 1: Menu Element').click()
    
      cy.contains('a', 'Home')
      .should('have.css', 'color', 'rgb(218, 75, 75)') // Initial red
      .realHover() // Use a more realistic hover action
      .wait(500) // Wait for possible transition
      .should('have.css', 'color', 'rgb(0, 0, 0)'); // Expect black on hover
    
      cy.contains('a', 'Home')
      .invoke('css','width')
      .then((width) => {
        cy.log('Element Width:', width); // Logs the color
      });
    
    
      
    })
    
    //Test Case 39  - Shifting Content Menu
    it('Shifting Content Image', () => {
      cy.visit('https://the-internet.herokuapp.com/')
      cy.get(':nth-child(39) > a').click()
      cy.contains('Example 2: An image').click()
    
      for(let x=0; x < 3 ; x++){
    
        cy.get('.shift') // Select the image
      .then(($img) => {
        const position = $img.position(); // Get position (top, left)
        cy.log(`Image Position - Top: ${position.top}, Left: ${position.left}`);
      });
        cy.get('a').eq(1).click()
      }
      
    })
    
    //Test Case 39  - Shifting Content Menu
    it('Shifting Content List', () => {
      cy.visit('https://the-internet.herokuapp.com/')
      cy.get(':nth-child(39) > a').click()
      cy.contains('Example 3: List').click()
    
      cy.get('.row .large-6.columns.large-centered') // Target the div
      .invoke('html') // Get raw HTML content
      .then((html) => {
        const sentences = html.split(/<br\s*\/?>\s*<br\s*\/?>/).map(s => s.trim()); // Correct split
        cy.log('First Sentence:', sentences[0]); // Log first sentence
        cy.log('Second Sentence:', sentences[1]); // Log second sentence
      });
    })
    
    
    
    //Test Case 40  - Slow Resources
    it('Slow Resources', () => {
      cy.visit('https://the-internet.herokuapp.com/')
      cy.get(':nth-child(40) > a').click()
      
    
        cy.request({
          method: 'GET',
          url: 'https://the-internet.herokuapp.com/slow_external',
          timeout: 60000, // Increase timeout to 60s
          failOnStatusCode: false, // Prevents Cypress from failing on 4xx/5xx responses
        })
      .wait(30000).then((response) => {
        cy.log(response.status)
        //cy.log(response.body)
      }) 
    })
    
    //Test Case 41  - Data Tables 1
    it('Data Tables 1 Identify the Value', () => {
      cy.visit('https://the-internet.herokuapp.com/')
      cy.get(':nth-child(41) > a').click()
      
      //Basic Table Test - show what is on a specific column and/or row
      cy.get('#table1 tbody tr').first().within(() => {
        cy.get('td').eq(0)
      })
    
      cy.get('#table1 tbody tr').eq(1).within(() => {
        cy.get('td').eq(1)
      })
    
      cy.get('#table1 tbody tr').eq(3).within(() => {
        cy.get('td').eq(4)
      })
        
    })
    
    
    //Test Case 41  - Data Tables 2
    it('Data Tables 2 Identify the row index', () => {
      cy.visit('https://the-internet.herokuapp.com/')
      cy.get(':nth-child(41) > a').click()
      
      cy.get('#table1 tbody tr').each(($row, index) => {
        cy.wrap($row).within(() => {
          cy.get('td').first().invoke('text').then((text) => {
            if (text.trim() === 'Doe') {
              cy.log(`Doe is in row index: ${index}`);
            }
          });
        });
      });
    
        
    })
    
    //Test Case 41  - Data Tables 3
    it('Data Tables 3 Identify the row column index', () => {
      cy.visit('https://the-internet.herokuapp.com/')
      cy.get(':nth-child(41) > a').click()
      
      cy.get('#table1 tbody tr').each(($row) => {
        cy.wrap($row).within(() => {
          cy.get('td').each(($cell, colIndex) => {
            cy.wrap($cell).invoke('text').then((text) => {
              if (text.trim() === 'Jason') {
                cy.log(`Jason is in column index: ${colIndex}`);
              }
            });
          });
        });
      });
        
    })
    
    //Test Case 41  - Data Tables 4
    it('Data Tables 4 Identify the row number or column number', () => {
      cy.visit('https://the-internet.herokuapp.com/')
      cy.get(':nth-child(41) > a').click()
      
      cy.get('#table1 tbody tr').each(($row, rowIndex) => {
        cy.wrap($row).within(() => {
          cy.get('td').each(($cell, colIndex) => {
            cy.wrap($cell).invoke('text').then((text) => {
              if (text.trim() === 'tconway@earthlink.net') {
                cy.log(`Email found at row index: ${rowIndex}, column index: ${colIndex}`);
              }
            });
          });
        });
      });
        
    })
    
    it('Data Tables 5 Identify the row number based on class', () => {
      cy.visit('https://the-internet.herokuapp.com/')
      cy.get(':nth-child(41) > a').click()
      
      cy.get('#table2 .last-name').eq(1).invoke('text')
      cy.get('#table2 .last-name').eq(0).click()
      cy.get('#table2 .last-name').eq(1).invoke('text')
        
    })
    
    //Test Case 42  - Status Code
    it('Status Code', () => {
      cy.visit('https://the-internet.herokuapp.com/'); 
      cy.get(':nth-child(42) > a').click()
    
    
      
      cy.get('ul li').eq(3).click(15,15)
       
      cy.url().then((url) => {
        cy.log(url); // Logs the current URL
    
        cy.request({
          method: 'GET',
          url: url,
          failOnStatusCode: false, // Prevents Cypress from failing on 4xx/5xx responses
        })
      .then((response) => {
        cy.log(response.status)
        //cy.log(response.body)
      })
      
      })
    
    })
    
    //Test Case 43  - Typos
    it('Typos', () => {
      cy.visit('https://the-internet.herokuapp.com/'); 
      cy.get(':nth-child(43) > a').click()
    
      cy.get('.example p').eq(1) // Adjust selector if needed
        .invoke('text')
        .then((actualText) => {
          const expectedText = "Sometimes you'll see a typo, other times you won't.";
    
          if (actualText.trim() === expectedText) {
            cy.log('There is no typo on the page');
          } else {
            cy.log('There is a typo on the page');
          }
        });
    })
    */
    //Test Case 44  - TinyMCE WYSIWYG
    it('TinyMCE WYSIWYG', () => {
      cy.visit('https://autotest.how/demo/tinymce'); 
      
      cy.get('iframe.tox-edit-area__iframe').then(($iframe) => {
        const body = $iframe.contents().find('body');
    
        cy.wrap(body)
          .clear() // Clear existing text
          .type('My Name is Miguel welcome to my CYPRESS Demo Test'); // Type new text
    
          cy.wrap(body)
          .type('{selectall}')
          .get('button[aria-label="Bold"]').click();
    
          cy.wrap(body)
          .type('{leftarrow}{rightarrow}')
          .get('button[aria-label="Bold"]').click();
    
          cy.wrap(body)
          .type('{selectall}')
          .get('button[aria-label="Align center"]').click();
    
          cy.wrap(body)
          .invoke('html', `
            <p>My Name is <b>Miguel</b>, welcome to my <i>CYPRESS Demo Test</i>.</p>
            <br>
            <table border="1">
              <tr>
                <th>Header 1</th><th>Header 2</th>
              </tr>
              <tr>
                <td>Data 1</td><td>Data 2</td>
              </tr>
            </table>
          `)
    
    
      });
    
      
    
    
    
    
          
    })
      // End of Test Case
    
    })
    