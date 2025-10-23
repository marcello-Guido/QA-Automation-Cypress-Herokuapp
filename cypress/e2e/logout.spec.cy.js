import dataUser from '../fixtures/dataUser.json'
import systemMessage from '../fixtures/systemMessage.json'
import LoginPage from '../pages/loginPage'
import LogoutPage from '../pages/logoutPage'

const loginPage = new LoginPage()
const logoutPage = new LogoutPage()

describe('template spec', () => {
    it('Logout with success', () => {
        loginPage.accessPage()
        loginPage.userLogin(dataUser.admin.username, dataUser.admin.password)
        loginPage.successMsg(systemMessage.success.login_success)

        logoutPage.logout(systemMessage.success.logout_success)
    })

})