describe("api user spec", () => {
  it("should create new user", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/user", {
      id: 400,
      username: "IvannaTest",
      firstName: "Test",
      lastName: "Test",
      email: "test@test.com",
      password: "password",
      phone: "3453t53t53",
      userStatus: 0,
    }).then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eqls({
        code: 200,
        type: "unknown",
        message: "400",
      });
    });
  });

  it("should update user", () => {
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
    cy.request("DELETE", "https://petstore.swagger.io/v2/user/IvannaTest", {
      phone: "77777777",
    }).then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eqls({
        code: 200,
        type: "unknown",
        message: "IvannaTest",
      });
    });
  });
});
