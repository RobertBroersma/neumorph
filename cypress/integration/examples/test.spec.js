context('Window', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('cy.window() - get the global window object', () => {
    cy.get('#button').click()
  })
})
