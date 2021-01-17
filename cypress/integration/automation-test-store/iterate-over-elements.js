///<reference types ='Cypress'/>


describe('Verifying variables, cypress and jQuery commands', () => {
    beforeEach(()=>{
        cy.visit('http://automationteststore.com/')
    })

    it('Log information of all hare care products', () => {
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
        cy.get('.prdocutname').each(($el, index, $list) => {
            cy.log('Index: ' + index + ": " + $el.text())
        })

    })

    it('Add specific product to basket', () => {
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click();
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if($el.text().includes('Curls to straight Shampoo')){
                cy.wrap($el).click()
                cy.url().should('include', 'path=52&product_id=74')
            }
        })

    })

    it('Add specific product to basket with custom command', () => {
        cy.selectProductCategoryByName('Hair Care')
        cy.selectProductByName('Curls to straight Shampoo');
    })
})