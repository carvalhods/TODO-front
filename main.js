var app = angular.module("todo", ["ngResource"]);

app.controller("TodoController", ['$scope', '$http', function($scope, $http) {

  var url = "http://localhost:5000/";
  $scope.msg = "";

  /**
  * Busca todos os TODOs cadastrados na base de dados em formato JSON
  * atribuindo os valores à scope 'todos'
  */
  function buscaContatos() {
    $http.get(url)
    .then(function(res) {
      $scope.todos = res.data;
      $scope.todo = {item: null};
      $scope.editTodo = {id: null, item: null};
    })
    .catch(function(err) {
      console.log(err);
    });
  }
  buscaContatos();


  /**
   * Exclui da base de dados um TODO informado pelo usuário, e em seguida
   * atualiza a lista na página
   */
  $scope.remove = function(todo) {
    $http.delete(url + todo.id)
    .then(function(res) {
      buscaContatos();
      $scope.msg = "Deletado"
    })
    .catch(function(erro) {
      console.log(erro);
    });
  };

  $scope.edita = function(todo) {
    $scope.editTodo = {id: todo.id, item: todo.item}
  };

  /**
  * Recebe o TODO incluído ou alterado pelo usuário, salva na base de dados
  * e em seguida atualiza a lista na página
  */
  $scope.salva = function(todo) {
    $http.post(url, todo)
    .then(function(res) {
      buscaContatos();
      $scope.msg = (!todo.id) ? "Incluído" : "Editado";
    })
    .catch(function(erro) {
      console.log(erro);
    });
  }

}]);
