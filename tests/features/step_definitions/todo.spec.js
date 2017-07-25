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

  /**
   * Cenário: Usuário deseja incluir um TODO
   */
  this.When(/^o usuário incluir o TODO "([^"]*)"$/, function (value) {
    element(by.id("inputTodo")).clear()
    .then(function() {
      element(by.id("inputTodo")).sendKeys(value);
    });
  });

  this.When(/^clicar em Incluir$/, function () {
    element(by.id("btnIncluir")).click();
  });

  this.Then(/^o valor "([^"]*)" deverá aparecer na lista$/, function (value, callback) {
    var mappedVals = element.all(by.repeater('todo in todos').column('todo.item')).map(function(elm) {
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


  /**
  * Cenário: Usuário deseja localizar um TODO
  */
  this.When(/^o usuário informar a palavra\-chave "([^"]*)"$/, function (value) {
    element(by.id("inputSearch")).clear()
    .then(function() {
      element(by.id("inputSearch")).sendKeys(value);
    });
  });

  this.When(/^clicar em Buscar$/, function () {
    element(by.id("btnSearch")).click();
  });

  this.Then(/^a lista deverá conter ao menos um item que contenha o valor "([^"]*)"$/, function (value, callback) {
    var mappedVals = element.all(by.repeater('todo in todos').column('todo.item')).map(function(elm) {
      return elm.getText();
    });
    mappedVals.then(function (textArr) {
      for (i in textArr) {
        if (textArr[i].toLowerCase().includes(value.toLowerCase())) {
          callback();
          return;
        }
      }
      assert.equal(true, false);
    });
  });


  /**
  * Cenário: Usuário deseja editar um TODO
  */
  this.When(/^o usuário clicar no botão Editar do elemento na posição "([^"]*)"$/, function (position) {
    element(by.repeater('todo in todos').row(position))
      .element(by.css('.btnEditar'))
      .click();
  });

  this.When(/^digitar o valor "([^"]*)"$/, function (value) {
    element(by.id("inputEdit")).clear()
    .then(function() {
      element(by.id("inputEdit")).sendKeys(value);
    });
  });

  this.When(/^clicar em Salvar$/, function () {
    element(by.id("btnSalvar")).click();
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


  /**
  * Cenário: Usuário deseja excluir um TODO
  */
  this.When(/^o usuário clicar no botão Excluir do elemento na posição "([^"]*)"$/, function (position) {
    setTimeout(function() {
      element(by.repeater('todo in todos').row(position))
        .element(by.css('.btnExcluir'))
        .click();
    }, 1400);
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
    }, 1500);
  });

}
