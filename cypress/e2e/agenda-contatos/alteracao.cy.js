/// <reference types="cypress" />

describe('Testes para a página de Agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve editar um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear()
        cy.get('[type="email"]').clear()
        cy.get('[type="tel"]').clear()

        cy.get('[type="text"]').type('Aldo S')
        cy.get('[type="email"]').type('aldo.s@mail.com')
        cy.get('[type="tel"]').type('1100225679')
        cy.get('.alterar').click()
    })
})