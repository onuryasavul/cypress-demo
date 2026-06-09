it("Login with false user", () => {
  cy.visit("/");
  cy.contains("Swag Labs");
  cy.get("#user-name").type("onuryasavul");
  cy.get("#password").type("password");
  cy.get("#login-button").click();
  cy.contains(
    "Epic sadface: Username and password do not match any user in this service",
  );
});
