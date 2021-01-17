///<reference types ='Cypress'/>


describe('Inspect store items using chain commands ',()=>{

    it('Click 1st item using item header', ()=>{
        cy.visit('http://automationteststore.com/')
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    })

    it.only('Click 1st item using item text', ()=>{
        cy.visit('http://automationteststore.com/')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            console.log('Selected the folowing item:', itemHeaderText.text())
        })
    })

    it('Click 1st item using item index', ()=>{
        cy.visit('http://automationteststore.com/')
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    })
})