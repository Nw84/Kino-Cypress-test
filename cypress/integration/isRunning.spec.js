describe("Test that visits the baseUrl (localhost:5080) and checks if the website is running", () => {
    it("successfully loads", () => {
        cy.visit("/")
    })
})

