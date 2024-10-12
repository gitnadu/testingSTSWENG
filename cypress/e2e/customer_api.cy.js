describe("Customer API test", () => {
  context("Gets a list of customers", () => {
    it.only("No filters.", () => {
      cy.request("GET", "http://localhost:3000/api/customers").then(
        (response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("results");
        }
      );
    });

    it("Only name filtered.", () => {});

    it("Only type filtered.", () => {});

    it("Only status filtered.", () => {});

    it("Only date filtered.", () => {});

    it("All fitlers", () => {});
  });
});
