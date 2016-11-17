import { Ng2ComponentLoaderPage } from './app.po';

describe('ng2-component-loader App', function() {
  let page: Ng2ComponentLoaderPage;

  beforeEach(() => {
    page = new Ng2ComponentLoaderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
