import { browser, element, by } from 'protractor';

describe('bt', () => {

  beforeEach(async () => {
    return await browser.get('/bt');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-bt h2')).getText()).toEqual('Features');
  });

});
