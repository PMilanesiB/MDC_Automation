import 'cypress-wait-until';

class MainPage {

    footer() {
        cy.xpath('//div[@id="kt_footer"]').toMatchImageSnapshot({
            threshold: 0.5
            })
    }

    menu(){
        cy.xpath('//*[@id="kt_aside_menu_wrapper"]').toMatchImageSnapshot({
            threshold: 9.9
            })
    }
}

export default new MainPage