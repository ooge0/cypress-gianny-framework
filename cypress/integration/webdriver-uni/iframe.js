///<reference types ='Cypress'/>

describe('iFrame tests via WebDriverUni', () => {
    it('Handle iFrame via webdriveruniversity', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#iframe').invoke('removeAttr', "target").click({ force: true })

        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })

        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')
        cy.get('@iframe').find('.modal-title').as('modalTitle')
        cy.get('@iframe').find('.modal-body').as('modalBody')
        cy.get('@iframe').find('.modal-header').as('modalHeader')
        cy.get('@iframe').find('.modal-footer').as('modalFooter')
        // basic approach with .should('have.text', ...)
        cy.get('@modalTitle').should('have.text', 'Welcome to webdriveruniversity.com')

        // the same case with promise
        cy.get('@modal').should(($expectedText)=>{
            const text = $expectedText.text()
            expect(text).to.include ('Welcome to webdriveruniversity.com we sell a wide range of electrical goods ')  
        })
        cy.get('@modalFooter').contains('Close').click()


    })
})