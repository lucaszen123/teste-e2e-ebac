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
      .type(`${qtd}`);
  }

  adicionarAoCarrinho() {
    cy.get('.single_add_to_cart_button').click();
  }

  irParaCarrinho() {
    cy.get('.woocommerce-message > .button').click();
  }

  validarMensagemDeSucesso(produto) {
    cy.get('.woocommerce-message')
      .should('contain.text', `“${produto}” foi adicionado no seu carrinho`);
  }

  adicionarProduto(nomeProduto, tamanho, cor, qtd) {
    cy.visit('/produtos'); 
    cy.contains(nomeProduto).click();
    this.selecionarTamanho(tamanho);
    this.selecionarCor(cor);
    this.definirQuantidade(qtd);
    this.adicionarAoCarrinho();
    this.validarMensagemDeSucesso(nomeProduto);
  }
}

export default new ProdutoPage();
