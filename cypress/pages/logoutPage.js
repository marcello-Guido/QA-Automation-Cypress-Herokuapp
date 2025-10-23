class LogoutPage {
    selectorsList() {
        const selectors = {
            logoutButton: "[href='/logout']",
            successLogin: ".success"
        }
        return selectors
    }

    logout(message) {
        cy.get(this.selectorsList().logoutButton).click()
        cy.get(this.selectorsList().successLogin)
            .should('contain', message)
    }
}

export default LogoutPage