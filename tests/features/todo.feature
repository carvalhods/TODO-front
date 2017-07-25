Feature: Implementar uma aplicação de TODO
  Para controlar minhas tarefas
  Como usuário
  Desejo uma aplicação de TODO

  @10
  Scenario: Desenvolver uma função para incluir um TODO
    Given que a aplicação esteja aberta
    When o usuário preencher o campo "inputTodo" com o valor "Estudar"
    And o usuário clicar no botão "btnIncluir"
    Then o valor "Estudar" deverá aparecer na lista de TODOs

  @11
  Scenario: Desenvolver uma função para localizar um TODO
    Given que a aplicação esteja aberta
    When o usuário preencher o campo "inputSearch" com o valor "Estudar"
    And o usuário clicar no botão "btnSearch"
    Then a lista de TODOs deverá conter ao menos um item que contenha o valor "Estudar"

  @12
  Scenario: Desenvolver uma função para editar um TODO
    Given que a aplicação esteja aberta
    When o usuário clicar no botão Editar do elemento na posição "0"
    And o usuário preencher o campo "inputEdit" com o valor "Trabalhar"
    And o usuário clicar no botão "btnSalvar"
    Then o TODO deverá aparecer na lista com seu nome alterado

  @13
  Scenario: Desenvolver uma função para excluir um TODO
    Given que a aplicação esteja aberta
    When o usuário clicar no botão Excluir do elemento na posição "0"
    Then o TODO deverá sair da lista
