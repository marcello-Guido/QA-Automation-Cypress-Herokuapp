import dataUser from '../fixtures/dataUser.json'
import systemMessage from '../fixtures/systemMessage.json'

describe('template spec', () => {
  it('Login with Success', () => {
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get("[name='username']").type(dataUser.admin.username)
    cy.get("[name='password']").type(dataUser.admin.password)
    cy.get("[type='submit']").click()

    cy.get('.success')
      .should('contain', systemMessage.success.login_success)

  })

  it('Invalid username', () => {
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get("[name='username']").type('tomsmit')
    cy.get("[name='password']").type('SuperSecretPassword!')
    cy.get("[type='submit']").click()

    cy.get('.error')
      .should('contain', systemMessage.error.username_error)

  })

  it('Invalid password', () => {
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get("[name='username']").type('tomsmith')
    cy.get("[name='password']").type('SuperSecretPassword')
    cy.get("[type='submit']").click()

    cy.get('.error')
      .should('contain', systemMessage.error.password_error)

  })

  it('Empty password', () => {
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get("[name='username']").type('tomsmith')
    cy.get("[type='submit']").click()

    cy.get('.error')
      .should('contain', systemMessage.error.password_error)

  })


  it('Empty username', () => {
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get("[name='password']").type('SuperSecretPassword!')
    cy.get("[type='submit']").click()

    cy.get('.error')
      .should('contain', systemMessage.error.username_error)

  })

  it('Empty filed', () => {
    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get("[type='submit']").click()

    cy.get('.error')
      .should('contain', systemMessage.error.username_error)

  })

})