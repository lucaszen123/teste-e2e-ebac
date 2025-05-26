class ProdutoPage {
  selecionarTamanho(tamanho) {
    cy.get(`.button-variable-item-${tamanho}`).click();
  }

  selecionarCor(cor) {
    cy.get(`.button-variable-item-${cor}`).click();
  }

  definirQuantidade(qtd) {
    cy.get('.input-text.qty')
      .clear()
      .type(qtd);
  }

  adicionarAoCarrinho() {
    cy.get('.single_add_to_cart_button').click();
  }

  irParaCarrinho() {
    cy.get('.woocommerce-message > .button').click()
  }
}

export default new ProdutoPage();
