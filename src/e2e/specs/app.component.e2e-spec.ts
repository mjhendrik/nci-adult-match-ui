import { browser, element, by } from 'protractor';

describe('App', () => {

  beforeEach(async () => {
    return await browser.get('/');
  });

  it('should have a title', () => {
    expect(browser.getTitle()).toEqual('Welcome to nci-adult-match-ui!');
  });

  it('should have <nav>', () => {
    expect(element(by.css('sd-app sd-navbar nav')).isPresent()).toEqual(true);
  });

  it('should have correct nav text for dashboard', () => {
    expect(element(by.css('sd-app sd-navbar nav a:first-child')).getText()).toEqual('dashboard');
  });

  it('should have correct nav text for patients', () => {
    expect(element(by.css('sd-app sd-navbar nav a:nth-child(2)')).getText()).toEqual('patients');
  });

});
