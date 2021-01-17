///<reference types ='Cypress'/>

describe('Test data picker via WebDriverUni', () => {
    it('Getting current day and change it by getData/setData', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#datepicker').invoke('removeAttr', "target").click({
            force: true
        })
        let date = new Date();
        date.setDate(date.getDate());
        cy.log('current day: ' + date.getDate()); //get current day , i.e. 22

        let date2 = new Date();
        date2.setDate(date.getDate() + 5)
        cy.log('current day +5: ' + date2.getDate()); //get current day , i.e. 22 + 5 = 27

    })

    it('Select month and year based on defined number of days in the feature', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#datepicker').invoke('removeAttr', "target").click({
            force: true
        })

        let date = new Date();
        date.setDate(date.getDate() + 340);

        let futureYear = date.getFullYear();
        let futureMonth = date.toLocaleString("default", {
            month: "long"
        })
        let futureDay = date.getDate();

        cy.log('Future year to select: ' + futureYear);
        cy.log('Future month to select: ' + futureMonth);
        cy.log('Future day to select: ' + futureDay);
    })


    it('Select day, month and year based on provided day as a + days', () => {
        cy.visit('http://webdriveruniversity.com/')
        cy.get('#datepicker').invoke('removeAttr', "target").click({
            force: true
        })
        cy.get('.form-control').click()

        let date = new Date();
        date.setDate(date.getDate() + 35);

        let futureYear = date.getFullYear();
        let futureMonth = date.toLocaleString("default", {
            month: "long"
        })
        let futureDay = date.getDate();

        cy.log('Future year to select: ' + futureYear);
        cy.log('Future month to select: ' + futureMonth);
        cy.log('Future day to select: ' + futureDay);

        function selectMonthAndYear(params) {
            cy.get('.dropdown-menu').find('.datepicker-switch').first().then(currentDay => {
                if (!currentDay.text().includes(futureYear)) {
                    cy.log('selected year: ' + futureYear);
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get('.dropdown-menu').find('.datepicker-switch').first().then(currentDay => {
                    if (!currentDay.text().includes(futureMonth)) {
                        cy.log('selected month: ' + futureMonth);
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }

        function selectFeatureDay(params) {
            cy.get('[class="day"]').contains(futureDay).click()

        }
        selectMonthAndYear();
        selectFeatureDay();
    })
})