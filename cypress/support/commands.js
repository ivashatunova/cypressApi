// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  "createUser",
  (id, username, firstName, lastName, email, password, phone, userStatus) => {
    return cy.request("POST", "https://petstore.swagger.io/v2/user", {
      id: id,
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      userStatus: userStatus,
    });
  }
);

Cypress.Commands.add("deleteUser", (userName) => {
  return cy.request(
    "DELETE",
    `https://petstore.swagger.io/v2/user/${userName}`
  );
});
