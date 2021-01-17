///<reference types ='Cypress'/>

describe('Validate WebDriverUni homepage link',()=>{
    it('Confirm links redirects to the correct pages', ()=>{
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', "target").click({force:true})
        cy.url().should('include', 'contactus')
        
        cy.go('back')
        // cy.reload(true) // reload without using cache
        cy.reload() // reload  using cache
        cy.url().should('not.include', 'contactus')
        
        cy.go('forward')
        cy.url().should('include', 'contactus')
        
        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', "target").click({force:true})
        cy.url().should('include', 'Login-Portal')
        cy.get('.form input[placeholder = "Username"]').should('exist')
        
        //chellange
        cy.go('back')
        cy.get('#to-do-list').invoke('removeAttr', "target").click({force:true})
        cy.url().should('include', 'To-Do-List')
        cy.get('#container').should('exist')
        cy.get('#plus-icon').should('exist')
        cy.get('#container > h1').should('have.text', 'TO-DO LIST ')


    })

})