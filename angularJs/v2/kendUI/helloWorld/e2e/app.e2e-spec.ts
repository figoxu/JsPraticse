import { K2Page } from './app.po';

describe('k2 App', function() {
  let page: K2Page;

  beforeEach(() => {
    page = new K2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
