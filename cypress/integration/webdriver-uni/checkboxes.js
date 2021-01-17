///<reference types ='Cypress'/>

describe('Test -  Validate checkbox actions via WebDriverUni', () => {
    beforeEach(function () {
        cy.log(Cypress.env("first_name"));
        cy.navigateToWebDriverCheckBoxPage();
    })

    it('Validate checkboxes actions via webdriveruniversity', () => {
        cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check().should('be.checked')
    })

    it('Validate unchecked checkboxes actions via webdriveruniversity', () => {
        cy.get('#checkboxes > :nth-child(3) > input').as('option-3')
        cy.get('@option-3').uncheck().should('not.be.checked')
    })

    it('Validate multiple check checkboxes  via webdriveruniversity', () => {
        cy.get("input[type='checkbox']").check(["option-1"] , ["option-2"], ["option-3"] , ["option-4"])
        cy.get("input[type='checkbox']").check(["option-1"] , ["option-2"], ["option-3"] , ["option-4"]).should('be.checked')
    })
})