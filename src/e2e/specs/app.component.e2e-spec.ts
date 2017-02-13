import { browser, element, by } from 'protractor';

describe('App', () => {

  beforeEach(async () => {
    return await browser.get('');
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

  it('should have correct nav text for treatment arms', () => {
    expect(element(by.css('sd-app sd-navbar nav a:nth-child(3)')).getText()).toEqual('treatment arms');
  });

  it('should have correct nav text for biopsy tracking', () => {
    expect(element(by.css('sd-app sd-navbar nav a:nth-child(4)')).getText()).toEqual('biopsy tracking');
  });

  it('should have correct nav text for clia labs', () => {
    expect(element(by.css('sd-app sd-navbar nav a:nth-child(5)')).getText()).toEqual('clia labs');
  });

});
