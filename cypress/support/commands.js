// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })

// ************ NAVIGATION to the pages

// ************* WebDriverUni *****************
Cypress.Commands.add("navigateToWebDriverUniHomePage", () => {
    cy.visit(Cypress.env("webDriverUni_homepage"))
})

Cypress.Commands.add("navigateToWebDriverUniContactUs", () => {
    cy.visit("/Contact-Us/contactus.html")
})

Cypress.Commands.add("navigateToWebDriverCheckBoxPage_old", () => {
    cy.visit('http://webdriveruniversity.com/')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', "target").click({ force: true })

})

Cypress.Commands.add("navigateToWebDriverCheckBoxPage", () => {
    cy.visit('/' + 'Dropdown-Checkboxes-RadioButtons/index.html')
})


// ************* AutoStore *****************

Cypress.Commands.add("navigateToAutoStoreHomePage", () => {
    cy.visit(Cypress.env("autoStore_homepage"), {timeout: 5000} )
})


// ********** CUSTOMS ACTIONS

Cypress.Commands.add("addSelectProductByNameToBasket", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
            cy.log($el.text())
            cy.get('.productcart').eq(index).click()
        }
    })
})

Cypress.Commands.add("selectProductByName", productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text()=== productName) {
            cy.wrap($el).click()
        }
    })
})

Cypress.Commands.add("selectProductCategoryByName", selectProductCategoryName => {
    cy.get('a[href*="product/category&path="]').contains(selectProductCategoryName).click()
})

Cypress.Commands.add("webdriverUni_ContactForm_Submission", function (first_name, last_name, email, message, $selector ,textToLocate) {
    cy.get('[name="first_name"]').type(first_name)
    cy.get('[name="last_name"]').type(last_name)
    cy.get('[name="email"]').type(email)
    cy.get('[name="message"]').type(message)
    cy.get('[type="submit"]').click()
    cy.get($selector).contains(textToLocate)
})

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';