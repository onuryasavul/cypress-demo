it("my first test", () => {
  cy.visit("/");
  cy.contains("Swag Labs");
  cy.get("#user-name").type("onuryasavul");
  cy.get("#password").type("password");
  cy.get("#login-button").click;
});
