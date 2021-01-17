import AutoStore_HomePage_PO from '../../support/pageObjects/automation-test-store/AutoStore_HomePage_PO'
import AutoStore_HairCare_PO from '../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO'

///<reference types ='Cypress'/>

describe('Add multiple items to the cart', () => {
    Cypress.config(`defaultCommandTimeout`, 1)
    const autoStoreHomePage_PO = new AutoStore_HomePage_PO;
    const autoStoreHairCare_PO = new AutoStore_HairCare_PO;
    before(() => {
        cy.fixture("products").then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        autoStoreHomePage_PO.visitHomePage()
        autoStoreHomePage_PO.clickOnHairCareLink()
    })

    it('Add specific items to basket with custom command', () => {
        autoStoreHairCare_PO.addHairCareProductToBasket()
    })
})