/// <reference types="cypress" />

import login from '../support/page_objects/login.page';
import home from '../support/page_objects/home.page';
import produto from '../support/page_objects/produto.page';
import carrinho from '../support/page_objects/carrinho.page';
import checkout from '../support/page_objects/checkout.page';
import perfil from '../fixtures/perfil.json';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  beforeEach(() => {
    cy.visit('produtos');
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
    // Login
    cy.visit('/minha-conta');
    login.preencherLogin(perfil.usuario, perfil.senha);
    login.submeterLogin();
    login.validarLogin();

    // Produto 1
    cy.visit('produtos');
    home.selecionarProduto('Abominable Hoodie');
    produto.selecionarTamanho('L');
    produto.selecionarCor('Blue');
    produto.definirQuantidade(1);
    produto.adicionarAoCarrinho();

    // Produto 2
    cy.visit('produtos');
    home.selecionarProduto('Ajax Full-Zip Sweatshirt');
    produto.selecionarTamanho('S');
    produto.selecionarCor('Green');
    produto.definirQuantidade(1);
    produto.adicionarAoCarrinho();

    // Produto 3
    cy.visit('produtos');
    home.selecionarProduto('Atlas Fitness Tank');
    produto.selecionarTamanho('M');
    produto.selecionarCor('Blue');
    produto.definirQuantidade(1);
    produto.adicionarAoCarrinho();

    // Produto 4
    cy.visit('produtos');
    home.selecionarProduto('Apollo Running Short');
    produto.selecionarTamanho('34');
    produto.selecionarCor('Black');
    produto.definirQuantidade(1);
    produto.adicionarAoCarrinho();
    produto.irParaCarrinho();

    // Checkout direto com dados já cadastrados
    carrinho.irParaCheckout();
    checkout.finalizarPedido();
    checkout.validarConfirmacao();
  });
});
