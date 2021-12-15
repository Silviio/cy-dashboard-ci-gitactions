describe('Select box', () => {
    it('should pick an option from select box', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('#tried-test-cafe').click()
        cy.get('.ui-slider-handle').invoke('attr', 'style', 'left: 100%')
        cy.get('#preferred-interface').select('JavaScript API')
        cy.get('#preferred-interface').should('have.value','JavaScript API')

  
    })
})