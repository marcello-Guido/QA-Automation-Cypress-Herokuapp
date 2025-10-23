class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passworfField: "[name='password']",
            submitButton: "[type='submit']",
            successMessage: ".success",
            failedMessage: ".error"
        }
        return selectors
    }

    accessPage() {
        cy.visit('/login')
    }

    userLogin(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passworfField).type(password)
        cy.get(this.selectorsList().submitButton).click()

    }

    userLogin_empt1(username) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().submitButton).click()
    }

    userLogin_empt2(password) {
        cy.get(this.selectorsList().passworfField).type(password)
        cy.get(this.selectorsList().submitButton).click()
    }

    userLogin_empt3() {
        cy.get(this.selectorsList().submitButton).click()
    }

    successMsg(message) {
        cy.get(this.selectorsList().successMessage)
            .should('contain', message)
    }

    failMsg(message) {
        cy.get(this.selectorsList().failedMessage)
            .should('contain', message)
    }
}

export default LoginPage