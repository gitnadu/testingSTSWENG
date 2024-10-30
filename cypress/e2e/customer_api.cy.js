import moment from "moment";

describe("Customer API test", () => {
  context("Gets a list of customers", () => {
    it("No filters.", () => {
      cy.request("GET", "http://localhost:3000/api/customers").then(
        (response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("results");
        }
      );
    });

    it("Only name filtered.", () => {
      cy.request("GET", "http://localhost:3000/api/customers?name=DLSU").then(
        (response) => {
          expect(response.status).to.eq(200);

          for (const result of response.body.results) {
            expect(result.name).to.match(/dlsu/i);
          }
        }
      );
    });

    it("Only type filtered.", () => {
      cy.request("GET", "http://localhost:3000/api/customers?type=Public").then(
        (response) => {
          expect(response.status).to.eq(200);

          for (const result of response.body.results) {
            expect(result.type).to.equal("Public");
          }
        }
      );
    });

    it("Only status filtered.", () => {
      cy.request(
        "GET",
        "http://localhost:3000/api/customers?status=Ongoing"
      ).then((response) => {
        expect(response.status).to.eq(200);

        for (const result of response.body.results) {
          expect(result.status).to.equal("Ongoing");
        }
      });
    });

    it("Only date filtered.", () => {
      const expectedDate = moment(new Date("1980-08-10")).format("YYYY-MM-DD");

      cy.request(
        "GET",
        "http://localhost:3000/api/customers?date=1980-08-10"
      ).then((response) => {
        expect(response.status).to.eq(200);

        for (const result of response.body.results) {
          expect(moment(result.date).format("YYYY-MM-DD")).to.equal(
            expectedDate
          );
        }
      });
    });

    it("All fillers", () => {
      cy.request(
        "GET",
        "http://localhost:3000/api/customers?name=corp&type=Private&status=Ongoing"
      ).then((response) => {
        expect(response.status).to.eq(200);

        for (const result of response.body.results) {
          expect(result.name).to.match(/corp/i);
          expect(result.type).to.equal("Private");
          expect(result.status).to.equal("Ongoing");
        }
      });
    });
  });
});
