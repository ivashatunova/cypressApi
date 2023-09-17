describe("api user spec", () => {
  it("should create new user", () => {
    createUser("IvannaTest").then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eqls({
        code: 200,
        type: "unknown",
        message: "400",
      });
    });
  });

  it("should update user", () => {
    createUser("IvannaTest");

    cy.request("PUT", "https://petstore.swagger.io/v2/user/IvannaTest", {
      phone: "77777777",
    }).then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eqls({
        code: 200,
        type: "unknown",
        message: "0",
      });
    });
  });

  it("should delete user", () => {
    createUser("IvannaTest");

    cy.deleteUser("IvannaTest").then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eqls({
        code: 200,
        type: "unknown",
        message: "IvannaTest",
      });
    });
  });
});

const createUser = (userName) => {
  return cy.createUser(
    400,
    userName,
    "Test",
    "Test",
    "test@test.com",
    "password",
    "3453t53t53",
    0
  );
};
