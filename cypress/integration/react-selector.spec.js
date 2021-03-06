describe('It should validate cypress react selector', () => {
  before(() => {
    cy.visit('https://ahfarmer.github.io/calculator/')
    cy.waitForReact()
  })

  it.only('it should validate react selection with component only', () => {
    cy.react('t').should('have.length', '22')
  })

  it.only('it should validate react selection component and props', () => {
    cy.react('t', { name: '5' }).should('have.text', '5')
  })

  it.only('it should validate react selection with wildcard', () => {
    cy.react('*', { name: '9' }).should('have.text', '9')
  })

  it.only('it should validate react selection with cypress find command', () => {
    cy.react('t', { name: '5' })
      .find('button')
      .should('have.text', '5')
  })

  it.only('should calculate 7 * 6', () => {
    cy.react('t', { name: '7' }).click()
    cy.react('t', { name: 'x' }).click()
    cy.react('t', { name: '6' }).click()
    cy.react('t', { name: '=' }).click()

    cy.get('.component-display').should('have.text', '42')
  })
})
