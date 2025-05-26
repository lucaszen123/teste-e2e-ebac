class CheckoutPage {
  preencherDados(nome, sobrenome, email, país, endereco, cidade, estado, cep, telefone) {
    cy.get('#billing_first_name').clear().type(nome);
    cy.get('#billing_last_name').clear().type(sobrenome);
    cy.get('#billing_email').clear().type(email);
    cy.get('#billing_country_field').click().type(país + '{enter}');
    cy.get('#billing_address_1').clear().type(endereco);
    cy.get('#billing_city').clear().type(cidade);
    cy.get('#billing_state').select(estado);
    cy.get('#billing_postcode').clear().type(cep);
    cy.get('#billing_phone').clear().type(telefone);
  }

  finalizarPedido() {
    // Aceita os termos antes de finalizar
    cy.get('.woocommerce-terms-and-conditions-wrapper > .form-row').scrollIntoView();
    cy.get('#terms').check({ force: true });

    // Seleciona o método de pagamento e finaliza
    cy.get('#payment_method_bacs').check();
    cy.get('#place_order').click();
  }

 validarConfirmacao() {
  cy.get('.woocommerce-notice', { timeout: 10000 })
    .should('contain', 'Obrigado. Seu pedido foi recebido.');
}

}

export default new CheckoutPage();
