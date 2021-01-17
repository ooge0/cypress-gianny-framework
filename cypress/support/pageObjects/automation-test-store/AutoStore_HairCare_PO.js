class AutoStore_HairCare_PO {
    addHairCareProductToBasket() {
        globalThis.data.productName.forEach(function (element) {
            cy.addSelectProductByNameToBasket(element).then(()=>{
                // debugger
            })
        })
        cy.selectProductByName('Curls to straight Shampoo');
        cy.get('.dropdown-toggle > .fa').click().debug()
    }
}
export default AutoStore_HairCare_PO