class AutoStore_HomePage_PO {
    visitHomePage() {
        cy.navigateToAutoStoreHomePage()
    }
    
    clickOnHairCareLink() {
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
    }
}
export default AutoStore_HomePage_PO