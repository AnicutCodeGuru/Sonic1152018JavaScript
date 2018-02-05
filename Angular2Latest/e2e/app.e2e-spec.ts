import { Angular2LatestPage } from './app.po';

describe('angular2-latest App', function() {
  let page: Angular2LatestPage;

  beforeEach(() => {
    page = new Angular2LatestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
