import { NgRxPage } from './app.po';

describe('ng-rx App', function() {
  let page: NgRxPage;

  beforeEach(() => {
    page = new NgRxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
