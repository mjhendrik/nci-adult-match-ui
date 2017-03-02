import { browser, element, by } from 'protractor';

describe('ta', () => {

  beforeEach(async () => {
    return await browser.get('/ta');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-ta h2')).getText()).toEqual('Features');
  });

});
