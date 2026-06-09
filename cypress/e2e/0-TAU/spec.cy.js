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

it("Login with correct user", () => {
  cy.visit("/");
  cy.contains("Swag Labs");
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
  cy.contains("Products");
});

it("Logout", () => {
  cy.visit("/");
  cy.contains("Swag Labs");
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
  cy.contains("Products");
  cy.get("#react-burger-menu-btn").click();
  cy.get("#logout_sidebar_link").click();
  cy.get("#user-name");
  cy.get("#password");
  cy.get("#login-button");
});
