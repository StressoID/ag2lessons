import { Ag2lessonsPage } from './app.po';

describe('ag2lessons App', () => {
  let page: Ag2lessonsPage;

  beforeEach(() => {
    page = new Ag2lessonsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
