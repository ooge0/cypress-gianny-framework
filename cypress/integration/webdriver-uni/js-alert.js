///<reference types ='Cypress'/>

describe('Handle js alert on WebDriverUni', () => {
    it('Confirm js alert contains correct text', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', "target").click({ force: true })
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am an alert box!')
        })
    })

    it('Validate js confirm alert box when click ok and it contains correct text and buttons', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', "target").click({ force: true })
        // scenario 1 >> Clicking OK button on js alert popup
        cy.get('#button4').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Press a button!')
            return true
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')
    })

    it('Validate js confirm alert box when click ok and it contains correct text and buttons', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', "target").click({ force: true })
        // scenario 2 >> Clicking Cancel button on js alert popup
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Press a button!')
            return false
        })
        cy.get('#confirm-alert-text').should('have.text', 'You pressed Cancel!')

    })

    it.only('Validate js confirm alert box using a stub', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', "target").click({ force: true })

        const stub = cy.stub()
        cy.on('window:confirm',stub)

        cy.get('#button4').click().then(()=> {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(()=>{
            return true
        }).then(()=>{
            cy.get('#confirm-alert-text').should('have.text', 'You pressed OK!')    
        })

    })

})