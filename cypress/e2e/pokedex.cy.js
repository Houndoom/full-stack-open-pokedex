describe('Pokedex', function() {
  beforeEach(function () {
    cy.visit('http://localhost:5000', { timeout: 100000 })
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('navigate to individual pokemon', function() {
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})