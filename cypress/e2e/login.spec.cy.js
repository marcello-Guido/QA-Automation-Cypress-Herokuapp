import dataUser from '../fixtures/dataUser.json'
import systemMessage from '../fixtures/systemMessage.json'
import LoginPage from '../pages/loginPage'

const loginPage = new LoginPage()

describe('template spec', () => {
  it('Login with Success', () => {
    loginPage.accessPage()
    loginPage.userLogin(dataUser.admin.username, dataUser.admin.password)
    loginPage.successMsg(systemMessage.success.login_success)
  })

  it('Invalid username', () => {
    loginPage.accessPage()
    loginPage.userLogin(dataUser.admin_name.username, dataUser.admin_name.password)
    loginPage.failMsg(systemMessage.error.username_error)
  })

  it('Invalid password', () => {
    loginPage.accessPage()
    loginPage.userLogin(dataUser.admin_password.username, dataUser.admin_password.password)
    loginPage.failMsg(systemMessage.error.password_error)
  })

  it('Empty password', () => {
    loginPage.accessPage()
    loginPage.userLogin_empt1(dataUser.admin.username)
    loginPage.failMsg(systemMessage.error.password_error)
  })

  it('Empty username', () => {
    loginPage.accessPage()
    loginPage.userLogin_empt2(dataUser.admin.password)
    loginPage.failMsg(systemMessage.error.username_error)
  })

  it('Empty filed', () => {
    loginPage.accessPage()
    loginPage.userLogin_empt3()
    loginPage.failMsg(systemMessage.error.username_error)
  })

})