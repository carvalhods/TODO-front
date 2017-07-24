var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
var assert = chai.assert;

module.exports = function() {

  this.setDefaultTimeout(100 * 1000);

  this.Given(/^que a aplicação esteja aberta$/, function () {
    browser.driver.getTitle()
      .then(function(texto) {
        return assert.equal(texto.trim(), "TODO");
      });
  });


  /*
  Cenário: Incluir
  */
  this.When(/^o usuário preencher o campo "([^"]*)" com o valor "([^"]*)"$/, function (arg1, arg2, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.When(/^o usuário clicar no botão "([^"]*)"$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^o valor "([^"]*)" deverá aparecer na lista de TODOs$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


  /*
  Cenário: Pesquisar
  */
  this.Then(/^a lista de TODOs deverá conter ao menos um item que contenha o valor "([^"]*)"$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


  /*
  Cenário: Editar
  */
  this.When(/^o usuário clicar no botão Editar do elemento "([^"]*)" da lista$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.When(/^o usuário preencher o novo valor "([^"]*)"$/, function (arg1, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^o TODO deverá aparecer na lista com seu nome alterado$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });


  /*
  Cenário: Excluir
  */
  this.When(/^o usuário clicar no botão "([^"]*)" do elemento na posição "([^"]*)"$/, function (arg1, arg2, callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

  this.Then(/^o TODO deverá sair da lista$/, function (callback) {
    // Write code here that turns the phrase above into concrete actions
    callback(null, 'pending');
  });

}
