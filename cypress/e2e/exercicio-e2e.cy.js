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
  cy.visit('/minha-conta');
  login.preencherLogin(perfil.usuario, perfil.senha);
  login.submeterLogin();
  login.validarLogin();

  produto.adicionarProduto('Abominable Hoodie', 'L', 'Blue', 1);
  produto.adicionarProduto('Ajax Full-Zip Sweatshirt', 'S', 'Green', 1);
  produto.adicionarProduto('Atlas Fitness Tank', 'M', 'Blue', 1);
  produto.adicionarProduto('Apollo Running Short', '34', 'Black', 1);
  produto.irParaCarrinho();

  carrinho.irParaCheckout();
  checkout.finalizarPedido();
  checkout.validarConfirmacao();
});
});
