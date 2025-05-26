class CarrinhoPage {
  irParaCheckout() {
    cy.get('.checkout-button').click();
  }
}

export default new CarrinhoPage();
