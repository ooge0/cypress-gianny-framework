///<reference types ='Cypress'/>

describe('Verify autocomplete  dropdown list via WebDriverUni', () => {
    it('Scroll elements into view', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', "target").click({ force: true })
        cy
    })

    it('Drag and drop by mouse actions', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', "target").click({ force: true })
        cy.get('#draggable').trigger('mousedown', { which: 1 })
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
    })

    it('Perform a double click', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', "target").click({ force: true })
        cy.get('#double-click').dblclick()
        cy.get('#double-click').should('have.css', 'background-color', 'rgb(147, 203, 90)').then($el => {
            cy.get($el).contains('Double Click Me!')
        })
    })

    it.only('Hold down the left mouse button on a given element', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', "target").click({ force: true })
        cy.get('#click-box').trigger('mousedown', { which: 1 }).then(($el) => {
            expect($el).to.have.css('background-color', 'rgb(0, 255, 0)')
            cy.get($el).should('have.text' ,'Well done! keep holding that click now.....')
        })
    })
})