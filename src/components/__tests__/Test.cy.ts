import Test from "../Test.vue";

describe("HelloWorld", () => {
	it("playground", () => {
		cy.mount(Test);
	});

	it("renders properly", () => {
		cy.mount(Test);
		cy.get("div").should("contain", "Test");
	});
});
