/// <reference types="cypress" />

describe('Testes para a home', () => {
    it('Deve rederizar 3 contatos', () => {
        // Comando para uso do site
        cy.visit('https://agenda-contatos-react.vercel.app/')
        // Comando para pegar o que queremos acessar do site para testar usando classe
        cy.get('div[class^=sc-beqWaB]').should('have.length', 3)
    })
})