class ContactUs_PO {
    contactForm_Submission (first_name, last_name, email, message, $selector ,textToLocate) {
        cy.get('[name="first_name"]').type(first_name)
        cy.get('[name="last_name"]').type(last_name)
        cy.get('[name="email"]').type(email)
        cy.get('[name="message"]').type(message)
        cy.get('[type="submit"]').click()
        cy.get($selector).contains(textToLocate, {timeout: 60000})
        cy.screenshot("Contact us form submission")
    }
}
export default ContactUs_PO