import { browser, element, by } from 'protractor';

describe('clia', () => {

  beforeEach(async () => {
    return await browser.get('/clia');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-clia h2')).getText()).toEqual('Features');
  });

});
