/// <reference types="cypress" />

describe('Testes para a página de Agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve adicionar um contato', () => {
        cy.get('[type="text"]').type('Aldo Santos')
        cy.get('[type="email"]').type('aldo@mail.com')
        cy.get('[type="tel"]').type('8145675679')
        cy.get('.adicionar').click()
    })
})