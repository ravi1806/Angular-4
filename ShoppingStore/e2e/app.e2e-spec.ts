import { ShoppingStorePage } from './app.po';

describe('shopping-store App', () => {
  let page: ShoppingStorePage;

  beforeEach(() => {
    page = new ShoppingStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
