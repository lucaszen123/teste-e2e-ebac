class LoginPage {
  preencherLogin(usuario, senha) {
    cy.get('#username').type(usuario);
    cy.get('#password').type(senha);
  }

  submeterLogin() {
   cy.get('.woocommerce-form > .button').click()
  }

  validarLogin() {
    cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá');
  }
}

export default new LoginPage();
