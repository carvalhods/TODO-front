var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;
var assert = chai.assert;

module.exports = function() {

  this.setDefaultTimeout(30 * 1000);

  this.Given(/^que a aplicação esteja aberta$/, function () {
    browser.driver.getTitle()
      .then(function(texto) {
        return assert.equal(texto.trim(), "TODO");
      });
  });


  /*
  Cenário: Incluir
  */
  this.When(/^o usuário preencher o campo "([^"]*)" com o valor "([^"]*)"$/, function (input, value) {
    element(by.id(input)).clear()
    .then(function() {
      element(by.id(input)).sendKeys(value);
    });
  });

  this.When(/^o usuário clicar no botão "([^"]*)"$/, function (button) {
    element(by.id(button)).click();
  });

  this.Then(/^o valor "([^"]*)" deverá aparecer na lista de TODOs$/, function (value, callback) {
    var mappedVals = element.all(by.repeater('todo in todos').column('todo.item')).map(function (elm) {
      return elm.getText();
    });
    mappedVals.then(function (textArr) {
      for (i in textArr) {
        if (textArr[i] == value) {
          callback();
          return;
        }
      }
      assert.equal(true, false);
    });
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
  this.When(/^o usuário clicar no botão Editar do elemento na posição "([^"]*)"$/, function (position) {
    element(by.repeater('todo in todos').row(position))
      .element(by.css('.btnEditar'))
      .click();
  });

  this.Then(/^o TODO deverá aparecer na lista com seu nome alterado$/, function (callback) {
    element(by.id('divMessage')).getText()
    .then(function(texto) {
      if (texto.trim() != "Editado") {
        assert.equal(true, false);
      } else {
        callback();
      }
    });
  });


  /*
  Cenário: Excluir
  */
  this.When(/^o usuário clicar no botão Excluir do elemento na posição "([^"]*)"$/, function (position) {
    setTimeout(function() {
      element(by.repeater('todo in todos').row(position))
        .element(by.css('.btnExcluir'))
        .click();
    }, 100);
  });

  this.Then(/^o TODO deverá sair da lista$/, function (callback) {
    setTimeout(function() {
      element(by.id('divMessage')).getText()
      .then(function(texto) {
        if (texto.trim() != "Deletado") {
          assert.equal(true, false);
        } else {
          callback();
        }
      });
    }, 200);
  });

}
