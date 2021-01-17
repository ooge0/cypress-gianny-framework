///<reference types ='Cypress'/>

describe('Verify autocomplete  dropdown list via WebDriverUni', () => {

    it('Select specific product via autocomplete dropdown list on webdriveruniversity', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#autocomplete-textfield').invoke('removeAttr', "target").click({ force: true })
        cy.get('#myInput').type('a')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text()
            const productToSelect = 'Avacado'
            // cy.log(productToSelect)
            if (prod === productToSelect) {
                cy.get($el).click()
                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
            }
            
        }).then(()=>{
            cy.get('#myInput').type('gr')
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text()
                const productToSelect = 'Grapes'
                if (prod === productToSelect) {
                    cy.get($el).click()
                    cy.get('#submit-button').click()
                    cy.url().should('include', productToSelect)
                }
            })  
        })
    })
})