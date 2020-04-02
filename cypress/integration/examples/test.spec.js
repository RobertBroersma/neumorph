context('Window', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Should click my button', () => {
    cy.get('#button').click()
  })
})
