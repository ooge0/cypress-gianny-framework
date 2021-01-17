///<reference types ='Cypress'/>

describe('File upload via WebDriverUni', () => {
    it('Upload PNG file by attachFile() methiod', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', "target").click({
            force: true
        })
        cy.fixture("1.png", "base64").then(fileContent => {
            cy.get('#myFile').attachFile({
                fileContent,
                fileName: "1.png",
                mimeType: "image/png"
            }, {
                uploadType: "input"
            })
        })
        cy.get("#submit-button").click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Your file has now been uploaded!')
        })

    })

    it('Upload no file..', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#file-upload').invoke('removeAttr', "target").click({
            force: true
        })
        cy.get("#submit-button").click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You need to select a file to upload!')
        })

    })
})