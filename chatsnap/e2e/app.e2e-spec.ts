import { ChatsnapPage } from './app.po';

describe('chatsnap App', () => {
  let page: ChatsnapPage;

  beforeEach(() => {
    page = new ChatsnapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
