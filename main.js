var app = angular.module("todo", []);

app.controller("TodoController", ['$scope', '$http', function($scope, $http) {

  var url = "http://localhost:5000/";
  $scope.msg = "";
  $scope.searchText = "";

  /**
  * Busca todos os TODOs cadastrados na base de dados em formato JSON
  * atribuindo os valores à scope 'todos'
  * @param {string} keyword - Opcional. Palavra-chave para filtrar os dados
  */
  function buscaContatos(keyword) {
    var full_url = (keyword) ? url + keyword : url;
    $http.get(full_url)
    .then(function(res) {
      $scope.todos = res.data;
      $scope.todo = {item: null};
      $scope.editTodo = {id: null, item: null};
      if (keyword) $scope.msg = "Filtrado"
    })
    .catch(function(err) {
      console.log(err);
    });
  }
  buscaContatos(null);


  /**
   * Filtra todos os TODOs com base em uma palavra-chave informada pelo usuário
   * atribuindo os valores à scope 'todos'
   * @param {string} keyword - Opcional. Palavra-chave para filtrar os dados
   */
  $scope.search = function(keyword) {
    buscaContatos(keyword);
  }


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


  /**
   * Prepara o TODO para edição
   */
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
