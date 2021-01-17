/// <reference types="Cypress" />
describe("Data table in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  })

    it("Calculate and assert the total age of all users", () => {
    let numb = 0
    var userDetails = []
    var userFirstNames =[]
    var userLastNames =[]
    var userAge = []
    cy.get('#thumbnail-1 td').each(($el, index, $list)=>{
      userDetails[index]= $el.text()
    }).then(()=>{
      var i
      for (i=0; i<userDetails.length; i++) {
        // userFirstNames += userDetails[i+1]
        if(Number(userDetails[i])){
          numb += Number(userDetails[i])
        }
        cy.log(userDetails[i])
      }
      cy.log('Total age: ' + numb)
      expect(numb).to.eq(322)
    })
    })

    it("Calculate and assert the age of a given user based on last name", () => {
      cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list)=>{
        if($el.text() ==='Woods'){
          cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(age=>{
            const userAge = age.text()
            expect(userAge).to.equal('80')
          })
        }
      })
      })
})
  