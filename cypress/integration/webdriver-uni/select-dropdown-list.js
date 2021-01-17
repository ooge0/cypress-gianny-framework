///<reference types ='Cypress'/>

describe('Interact with dropdown list via WebDriverUni', () => {
    it('Select specific values via selecting item from the dropdown on webdriveruniversity', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', "target").click({ force: true })
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('maven').should('have.value' ,'maven')
        cy.get('#dropdowm-menu-3').select('jquery').contains('JQuery')
    })

    it.only('Chalange dropdown on webdriveruniversity', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', "target").click({ force: true })
        cy.get('#dropdowm-menu-2').select('maven').should('have.value' ,'maven')
        cy.get('#dropdowm-menu-2').select('testng').contains('TestNG')
    })

})