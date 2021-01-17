///<reference types ='Cypress'/>


describe('Alias and invoke', () => {

    it('validate a specific hair care product', () => {
        cy.visit('http://automationteststore.com/')
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productName')
        cy.get('@productName').its('length').should('be.gt', 5)
        cy.get('@productName').should('include', 'Seaweed Conditioner')
    })
    
    it('Validate that amount of products is the same as amount of cart icons', () => {
        const productAmount = 16
        const productThumbNail = productAmount
        const cartIconAmount = 14
        cy.visit('http://automationteststore.com/')
        // cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
        cy.get('.thumbnail').as('productThumbNail')
        cy.get('.productcart').as('productCart')
        cy.get('.fixed_wrapper .prdocutname').as('productName')
        cy.get('@productThumbNail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
        cy.get('@productThumbNail').should('have.length',productThumbNail)
        cy.get('@productName').should('have.length',productAmount)
        cy.get('@productCart').should('have.length',cartIconAmount)
    })
    
    it.only('Calculate total of normal and sale products', () => {
        cy.visit('http://automationteststore.com/')
        cy.get('.thumbnail').as('productThumbNail')
        // cy.get('@productThumbNail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text())
        // })
        cy.get('@productThumbNail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('@productThumbNail').find('.pricenew').invoke('text').as('saleItemPrice')
        var itemsTotal =0
        cy.get('@itemPrice').then($linkText => {
            var itemsPriceTotal = 0
            var itemPrice = $linkText.split('$')
            var i
            for(i=0; i< itemPrice.length; i++){
                cy.log(itemPrice[i])
                itemsPriceTotal+=Number(itemPrice[i])
            }
            itemsTotal += itemsPriceTotal
            cy.log('Non sale price items total: ' + itemsPriceTotal)
        })
        var itemsTotal =0
        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPriceTotal = 0
            var saleItemPrice = $linkText.split('$')
            var i
            for(i=0; i< saleItemPrice.length; i++){
                cy.log(saleItemPrice[i])
                saleItemsPriceTotal+=Number(saleItemPrice[i])
            }
            itemsTotal += saleItemsPriceTotal
            cy.log('Non sale price items total: ' + saleItemsPriceTotal)
        })
        .then(()=>{
            cy.log("The total price of all pirces: " + itemsTotal)
            expect (itemsTotal).to.equal(652.6)
        })
    })
})
