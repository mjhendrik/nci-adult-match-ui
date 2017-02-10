import { browser, element, by } from 'protractor';

describe('tracking', () => {

  beforeEach(async () => {
    return await browser.get('/tracking');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-tracking h2')).getText()).toEqual('Features');
  });

});
