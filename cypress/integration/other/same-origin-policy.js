///<reference types ='Cypress'/>

describe('Cypress web security',()=>{
    it('Validating visiting different domains', ()=>{
        cy.visit('http://webdriveruniversity.com/')
        cy.visit('http://automationteststore.com/')

    })
    

    it('Validating visiting different domains via user action', ()=>{
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr','target').click()
        // cy.visit('http://automationteststore.com/')
    })
})