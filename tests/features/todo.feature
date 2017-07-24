Feature: Implementar uma aplicação de TODO
  Para controlar minhas tarefas
  Como usuário
  Desejo uma aplicação de TODO

  @10
  Scenario: Desenvolver uma função para incluir um TODO
    Given que a aplicação esteja aberta
    When o usuário preencher o campo "inputTodo" com o valor "Programar"
    And o usuário clicar no botão "btnIncluir"
    Then o valor "Programar" deverá aparecer na lista de TODOs

  @11
  Scenario: Desenvolver uma função para localizar um TODO
    Given que a aplicação esteja aberta
    When o usuário preencher o campo "inputSearch" com o valor "Programar"
    And o usuário clicar no botão "btnSearch"
    Then a lista de TODOs deverá conter ao menos um item que contenha o valor "Programar"

  @12
  Scenario: Desenvolver uma função para editar um TODO
    Given que a aplicação esteja aberta
    When o usuário clicar no botão Editar do elemento "0" da lista
    And o usuário preencher o novo valor "Trabalhar"
    And o usuário clicar no botão "btnSalvar"
    Then o TODO deverá aparecer na lista com seu nome alterado

  @13
  Scenario: Desenvolver uma função para excluir um TODO
    Given que a aplicação esteja aberta
    When o usuário clicar no botão "btnExcluir" do elemento na posição "0"
    Then o TODO deverá sair da lista
