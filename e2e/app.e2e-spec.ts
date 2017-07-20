import { TodoFrontPage } from './app.po';

describe('todo-front App', () => {
  let page: TodoFrontPage;

  beforeEach(() => {
    page = new TodoFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
