import { MeanCrudPage } from './app.po';

describe('mean-crud App', () => {
  let page: MeanCrudPage;

  beforeEach(() => {
    page = new MeanCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
