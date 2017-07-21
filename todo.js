function getAllTodos() {
  return '([{"id": "59713aa66e9552587fe95035", "item": "Programar em Python"}, \
          {"id": "59713ac26e9552587fe95037", "item": "Estudar"}, \
          {"id": "5971490a6e9552039b683204", "item": "Programar em JavaScript"}], 200)'
}

function getTodo(keyword) {
  return '([{"id": "59713aa66e9552587fe95035", "item": "Programar em Python"}], 200)'
}

function createTodo() {
  return '([{"id": "59713aa66e9552587fe95036", "item": "Programar em Java"}, 201)'
}

function deleteTodo(id) {
  return '("", 204)'
}
