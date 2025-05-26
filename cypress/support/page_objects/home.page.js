class HomePage {
  selecionarProduto(nomeProduto) {
    cy.get('.products .product').contains(nomeProduto).click();
  }
}

export default new HomePage();
