class HomePage_PO {
    visitHomePage() {
        cy.navigateToWebDriverUniHomePage()
    }
    
    visitDataTablePage() {
        cy.get("#data-table").invoke("removeAttr", "target").click({
            force: true
        });
    }

    clickingContactUsLink() {
        cy.get("#contact-us").invoke("removeAttr", "target").click({
            force: true
        });
    }
}
export default HomePage_PO