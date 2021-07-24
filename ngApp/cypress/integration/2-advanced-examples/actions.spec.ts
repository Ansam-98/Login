/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - test out navigation in our application', () => {
    // https://on.cypress.io/type
    cy.get('.post-user').click()
     
  })

  
})
