describe('Tickets', () => {

    //Antes de todo o restante do código ele roda um get para a URL
    beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));


    /*INTERAGINDO COM INPUTS DO TIPO TEXTO*/
    it("Fills all the text input fields", () => {

        //Constantes pois precisei utilizar a mesma variável mais de uma vez
        const firstName = "Eduardo"
        const lastName = "Zanotto"


        //Este comando busca elementos de css é preciso indica-los por meio do css
        cy.get("#first-name").type(firstName); //Type serve para digitar
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("alguém@gmail.com");
        cy.get("#requests").type("Vegetariano");
        cy.get("#signature").type(`${firstName} ${lastName}`); //Concatenando os valores
    })


    /*INTERAGINDO COM ELEMENTOS DO TIPO SELECT*/

    it("Select two tickets", () => {
        cy.get("#ticket-quantity").select("2")
    })

    it("Select three tickets", () => {
        cy.get("#ticket-quantity").select("3")
    })

    it("Select four tickets", () => {
        cy.get("#ticket-quantity").select("4")
    })


    /* INTERAGINDO COM RADIO BUTTONS*/
    //Ticket Type


    it("Select 'vip' ticket type", () => {
        cy.get("#vip").check()
    })

    /* INTERAGINDO COM CHECK BOXES*/
    //How did you hear about this event?


    it("Select 'social media' check box", () => {
        cy.get("#social-media").check()
    })

    it("Select 'publication' check box", () => {
        cy.get("#publication").check()
    })

    it.only("Select 'friend', and 'publication' then uncheck 'friend' ", () => {
        cy.get("#friend").check()
        cy.get("#publication").check()
        cy.get("#friend").uncheck() // Desmarquei que foi um amigo
    })


});