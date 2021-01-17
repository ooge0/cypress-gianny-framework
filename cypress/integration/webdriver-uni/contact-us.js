import HomePage_PO from '../../support/pageObjects/webdriver-uni/homePage_PO'
import ContactUs_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'
///<reference types ='Cypress'/>

describe('Test contact us form via WebDriverUni', () => {
    const contactUsPage_PO = new ContactUs_PO();
    const homePage_PO = new HomePage_PO();
    before(function () {
        // cy.viewport(550,750)
        cy.fixture('example').then(function (data) {
            globalThis.data = data
        });
        cy.fixture("userDetails").as("user")
    });;

    beforeEach(function () {
        homePage_PO.visitHomePage();
        cy.wait(30)
        homePage_PO.clickingContactUsLink();
        // cy.navigateToWebDriverUniHomePage()
        // cy.navigateToWebDriverUniContactUs()
    });;

    it('Should be able to submit a successful submission via Contact us form', () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', '/contactus')
        cy.get('[name="first_name"]').type(data.first_name).should('have.attr', 'placeholder', 'First Name')
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="email"]').type(data.email)
        cy.get('[name="message"]').type(data.message)
        cy.get('[name="last_name"]').should('have.attr', 'placeholder', 'Last Name')
        cy.get('[name="email"]').should('have.attr', 'placeholder')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    it('Should be able to submit a successful submission via Contact us form by custom command', () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', '/contactus')
        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, data.message, 'h1', 'Thank You for your Message!')
    });

    it('Should be able to submit a successful submission via Contact us form by custom command and global variables', () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', '/contactus')
        cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, data.message, 'h1', 'Thank You for your Message!')
    });


    it('Should not be able to submit a successful submission via Contact us form', () => {
        cy.get('[name="first_name"]').type(data.first_name)
        cy.get('[name="last_name"]').type(data.last_name)
        cy.get('[name="message"]').type(data.message)
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required Error: Invalid email address')
    });

    it('Should not be able to submit a successful submission via Contact us form by custom command', () => {
        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", data.message, 'body', 'Error: Invalid email address')
    });

    it('Should not be able to submit a successful submission via Contact us form by POM', () => {
        contactUsPage_PO.contactForm_Submission(data.first_name, data.last_name, " ", data.message, 'body', 'Error: Invalid email address')
    });

    it('Should be able to submit a successful submission via Contact us form by POM', () => {
        contactUsPage_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, data.message, 'h1', 'Thank You for your Message!')
    });

});