import { NgAnimatePage } from './app.po';

describe('ng-animate App', function() {
  let page: NgAnimatePage;

  beforeEach(() => {
    page = new NgAnimatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
