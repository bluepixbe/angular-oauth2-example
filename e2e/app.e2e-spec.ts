import { AngularOauth2ExamplePage } from './app.po';

describe('angular-oauth2-example App', () => {
  let page: AngularOauth2ExamplePage;

  beforeEach(() => {
    page = new AngularOauth2ExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
