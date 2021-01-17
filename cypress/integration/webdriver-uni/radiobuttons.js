///<reference types ='Cypress'/>

describe('Verify radio buttons contact us form via WebDriverUni', () => {
    before(function () {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', "target").click({ force: true })
    })

    it('Check specific radiobuttons via webdriveruniversity', () => {
        cy.get('#radio-buttons').find('[type="radio"]').first().check() // << this is working
        cy.get('#radio-buttons').find('[type="radio"]').eq(2).check() // << this is working. the couinting starts from 0
    })

    it('Check specific radiobuttons via webdriveruniversity', () => {
        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="cabbage"]').should('not.be.checked')
        cy.get('[value="pumpkin"]').should('be.checked')

    })
})