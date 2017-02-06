import { browser, element, by } from 'protractor';

describe('patients', () => {

  beforeEach(async () => {
    return await browser.get('/patients');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-patients h2')).getText()).toEqual('Features');
  });

});
