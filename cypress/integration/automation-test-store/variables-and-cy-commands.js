///<reference types ='Cypress'/>


describe('Verifying variables, cypress and jQuery commands',()=>{

    it('Navigation to specific product pages', ()=>{
        cy.visit('http://automationteststore.com/')
        /* The following approach will pass but this is not recommended fo using
        const makeUpLink = cy.get('a[href*="product/category&path="]').contains('Makeup')
        makeUpLink.click()
        const skinCareLink = cy.get('a[href*="product/category&path="]').contains('Skincare')
        skinCareLink.click()
        */

    // Recommended approach 
       cy.get('a[href*="product/category&path="]').contains('Makeup').click()
       cy.get('a[href*="product/category&path="]').contains('Skincare').click()
    })

    it('Navigation to specific product pages', ()=>{
        cy.visit('http://automationteststore.com/')
        cy.get('a[href*="product/category&path="]').contains('Makeup').click()
        /* Code below will not work, text() is not Cypress comand
        const headerText = cy.get('h1 .maintext')
        cy.log(header.text())
        */
       
       // it will work, because PROMISE was resolved
       cy.get('h1 .maintext').then(($headerText)=>{
           const headerText = $headerText.text()
           cy.log('Header text is: ' + headerText)
           expect(headerText).is.eq('Makeup')
       })
    })

    it('Validate properties of the contact us page', ()=>{
     cy.visit('https://automationteststore.com/index.php?rt=content/contact')
     // Uses Cypress commands and chaining
      cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain', 'First name:')
     
      // jQuery approach
      cy.contains('#ContactUsFrm','Contact Us Form')
        .then(text=>{
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')
            
            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText =>{
                cy.log(fnText.text())
                cy.log(fnText)
          })
      })
     
    })

})