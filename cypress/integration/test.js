describe("Calculate", () => {
  it("addition", () => {
    cy.visit("https://basic-calculator-by-angelol2046.netlify.app/");
    cy.get("#valueA").click();
    cy.get("#valueA").type("{backspace}");
    cy.get("#valueA").type("2");
    cy.get("#valueB").click();
    cy.get("#valueB").type("{backspace}");
    cy.get("#valueB").type("3");
    cy.get("#add").click();
    cy.get("#calculate").click();
    cy.get('#result').should("have.text", "Result: 5")
  });

  it("subtraction", () => {
    cy.visit("https://basic-calculator-by-angelol2046.netlify.app/");
    cy.get("#valueA").click();
    cy.get("#valueA").type("{backspace}");
    cy.get("#valueA").type("2");
    cy.get("#valueB").click();
    cy.get("#valueB").type("{backspace}");
    cy.get("#valueB").type("3");
    cy.get("#subtract").click();
    cy.get("#calculate").click();
    cy.get('#result').should("have.text", "Result: -1")
  });

  it("multiplication", () => {
    cy.visit("https://basic-calculator-by-angelol2046.netlify.app/");
    cy.get("#valueA").click();
    cy.get("#valueA").type("{backspace}");
    cy.get("#valueA").type("2");
    cy.get("#valueB").click();
    cy.get("#valueB").type("{backspace}");
    cy.get("#valueB").type("3");
    cy.get("#multiply").click();
    cy.get("#calculate").click();
    cy.get('#result').should("have.text", "Result: 6")
  });

  it("division", () => {
    cy.visit('https://basic-calculator-by-angelol2046.netlify.app/');
    cy.get("#valueA").click();
    cy.get("#valueA").type("{backspace}");
    cy.get("#valueA").type("2");
    cy.get("#valueB").click();
    cy.get("#valueB").type("{backspace}");
    cy.get("#valueB").type("3");
    cy.get('#divide').click();
    cy.get('#calculate').click();
    cy.get('#result').should("have.text", "Result: 0.6666666666666666")
  });
});
