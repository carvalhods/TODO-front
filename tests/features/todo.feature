#language: pt
#encoding: utf-8

Funcionalidade: Implementar uma aplicação de TODO
  Para controlar minhas tarefas
  Como usuário
  Desejo uma aplicação de TODO

  @10
  Cenário: Usuário deseja incluir um TODO
    Dado que a aplicação esteja aberta
    Quando o usuário incluir o TODO "Jogar bola"
      E clicar em Incluir
    Então o valor "Jogar bola" deverá aparecer na lista

  @11
  Cenário: Usuário deseja localizar um TODO
    Dado que a aplicação esteja aberta
    Quando o usuário informar a palavra-chave "Jogar bola"
      E clicar em Buscar
    Então a lista deverá conter ao menos um item que contenha o valor "Jogar bola"

  @12
  Cenário: Usuário deseja editar um TODO
    Dado que a aplicação esteja aberta
    Quando o usuário clicar no botão Editar do elemento na posição "0"
      E digitar o valor "Jogar futebol"
      E clicar em Salvar
    Então o TODO deverá aparecer na lista com seu nome alterado

  @13
  Cenário: Usuário deseja excluir um TODO
    Dado que a aplicação esteja aberta
    Quando o usuário clicar no botão Excluir do elemento na posição "0"
    Então o TODO deverá sair da lista
