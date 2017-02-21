import { browser, element, by } from 'protractor';

describe('login', () => {

  beforeEach(async () => {
    return await browser.get('');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-login h2')).getText()).toEqual('Features');
  });

});
