describe("Login Tests", () => {
  beforeEach(function () {
    // Load fixture and alias it as 'userData'
    cy.fixture("users").as("userData");
  });

  it("Load homepage", { defaultCommandTimeout: 3000 }, () => {
    cy.visit("/");
    cy.get(".login_logo", { timeout: 6000 }).should("be.visible");
  });

  it("Login with false user", () => {
    cy.visit("/");
    //cy.get(".login_logo").should("contain.text", "Swag Labs")
    cy.get(".login_logo").contains("Swag Labs");
    cy.fixture("users").then((myUserData) => {
      cy.get("#user-name").type(myUserData.invalid_username);
      cy.get("#password").type(myUserData.invalid_password);
    });
    cy.get("#login-button").click();
    cy.contains(
      "Epic sadface: Username and password do not match any user in this service",
    );
  });

  it("Login with correct user", function () {
    cy.visit("/");
    cy.contains("Swag Labs");
    cy.get("#user-name").type(this.userData.valid_username);
    cy.get("#password").type(this.userData.valid_password);
    //cy.get("#login-button").click()
    cy.contains("Login").click();
    cy.contains("Products");
  });

  it("Login with enter", () => {
    cy.visit("/");
    cy.contains("Swag Labs");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce{enter}");
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

  it("Number of products", () => {
    cy.visit("/");
    cy.contains("Swag Labs");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.contains("Products").should("be.visible");
    cy.get(".inventory_item").should("have.length", "6");
  });
});
