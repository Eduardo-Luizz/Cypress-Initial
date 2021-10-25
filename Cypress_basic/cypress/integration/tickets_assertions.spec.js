describe('Tickets_assertions', () => {
    beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));

    it("has 'TICKETBOX' header's heading", () => {
        cy.get("header h1").should("contain", "TICKETBOX");
    })

    it("alerts on invalid email", () => {
        cy.get("#email").type("alguem-gamil.com")

        //Agora vou validar se a propriedade email invalido realmente existe
        cy.get("#email.invalid").should("exist")
    })

    it("verificando email invalido e alterando", () => {
        cy.get("#email")
            .as("email") // Nomiei o #email para email
            .type("alguem-gamil.com")
        
        
        cy.get("#email.invalid").should("exist")

        cy.get("@email")
            .clear() // Manda limpar o campo
            .type("alguem@gamil.com")

        cy.get("#email.invalid").should("not.exist")
    })
})