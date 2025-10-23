import dataUser from '../fixtures/dataUser.json'
import systemMessage from '../fixtures/systemMessage.json'

describe('template spec', () => {
    it('Logout with success', () => {
        cy.visit('https://the-internet.herokuapp.com/login')

        cy.get("[name='username']").type(dataUser.admin.username)
        cy.get("[name='password']").type(dataUser.admin.password)
        cy.get("[type='submit']").click()

        cy.get('.success')
            .should('contain', systemMessage.success.login_success)

        cy.get("[href='/logout']").click()

        cy.get('.success')
            .should('contain', systemMessage.success.logout_success)

    })

})