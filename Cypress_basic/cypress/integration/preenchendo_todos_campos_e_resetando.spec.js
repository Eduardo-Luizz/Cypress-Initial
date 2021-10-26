describe("Preenchendo e resetando o formulário", () => {

    beforeEach(() => cy.visit("https://bit.ly/2XSuwCW"));

    it("Preenchendo o formulário automaticamente", () => {
        const firstName = "Eduardo";
        const lastName = "Luiz";
        const fullName = `${firstName} ${lastName}`;

        cy.get("#first-name").type(firstName);
        cy.get("#last-name").type(lastName);
        cy.get("#email").type("alguém@gmail.com");
        cy.get("#ticket-quantity").select("2");
        cy.get("#vip").check();
        cy.get("#friend").check();
        cy.get("#requests").type("IPA");

        cy.get(".agreement p").should(
            "contain",
            `I, ${fullName}, wish to buy 2 VIP tickets.`
        );

        cy.get("#agree").check(); // ou pode ser .click()

        cy.get("#signature").type(fullName);

        cy.get("button[type='submit']")
            .as("submitButton")
            .should("not.be.disabled");

        
        cy.get("button[type='reset']").click();

        cy.get("@submitButton").should("be.disabled");
    })

    it.only("Preenche campos obrigatórios usando o comando de suporte", () => {
        const customer = {
            firstName: "João",
            lastName: "Santos",
            email: "joaosantos@example.com"
        }

        //Chamei a function criada nos commands e passei o parametro da const customer
        cy.preencheCamposObrigatorios(customer)

            //Verificando que o botão não está disabled
            cy.get("button[type='submit']")
            .as("submitButton")
            .should("not.be.disabled");

        //Limpei um dos campos que é obrigatório
        cy.get("#agree").uncheck();

        cy.get("@submitButton").should("be.disabled");
    })
})