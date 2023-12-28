describe('Testes para a página de Agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve editar um contato', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
    })
})