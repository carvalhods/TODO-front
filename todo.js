/**
* Esta função retorna todos os TODOs cadastrados na base de dados em formato JSON.
*/
function getAllTodos() {
  return '([{"id": "59713aa66e9552587fe95035", "item": "Programar em Python"}, \
          {"id": "59713ac26e9552587fe95037", "item": "Estudar"}, \
          {"id": "5971490a6e9552039b683204", "item": "Programar em JavaScript"}], 200)'
}

/**
* Esta função retorna todos os TODOs cadastrados na base de dados
* em formato JSON que satisfaçam os critérios de busca.
* @param {string} keyword - Critério de busca que será comparado ao campo 'item' de cada TODO cadastrado
*/
function getTodo(keyword) {
  return '([{"id": "59713aa66e9552587fe95035", "item": "Programar em Python"}], 200)'
}

/**
* Esta função será responsável por receber os dados de um TODO informado
* pelo usuário e salvá-lo na base de dados.
*/
function createTodo() {
  return '([{"id": "59713aa66e9552587fe95036", "item": "Programar em Java"}, 201)'
}

/**
* Esta função será responsável por excluir da base de dados um TODO
* específico informado pelo usuário
* @param {string} id - ID do TODO a ser excluído da base de dados
*/
function deleteTodo(id) {
  return '("", 204)'
}
