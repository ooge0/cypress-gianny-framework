///<reference types ='Cypress'/>

describe('Test contact us form via Test Store', () => {
    beforeEach(function () {
        cy.fixture("userDetails").as("user")
        cy.visit('http://automationteststore.com/')
    })
    it('Should be able to submit a successful submission via Contact us form', {
            "retries": {
                "runMode": 1,
                "openMode": 2
            }
        }, () => {

        // cy.xpath('//ul/li[5]/a[contains(@href,"contact")]').click()   // << XPATH
        cy.get('a[href$="contact"]').click().then((footerText) => {
            cy.log('Footer link has text:', footerText.text())
        })
        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
            cy.get('#ContactUsFrm_enquiry').type(user.message)
        })

        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('button[title="Submit"]').click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    })
})