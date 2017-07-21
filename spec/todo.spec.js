describe('TODO_Controller', function() {

  it("Deve retornar uma lista com todos os TODOs cadastrados", function() {
    expect(getAllTodos()).toContain('200)');
  });

  it("Deve retornar uma lista com todos os TODOs cadastrados com base \
      no parâmetro de busca informado pelo usuário", function() {
    expect(getTodo("Python")).toContain('200)');
  });

  it("Deve retornar um objeto com os dados do TODO cadastrado \
      pelo usuário", function() {
    expect(createTodo()).toContain('201)');
  });

  it("Deve retornar um código 204 quando o usuário informar um TODO \
      para exclusão", function() {
    expect(deleteTodo("59713aa66e9552587fe95036")).toContain('204)');
  });

});
