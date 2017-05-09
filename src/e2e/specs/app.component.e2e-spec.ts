import { browser, element, by } from 'protractor';

describe('App', () => {

  beforeEach(async () => {
    return await browser.get('/');
  });

  fit('should have a title', () => {
    expect(browser.getTitle()).toEqual('NCI Adult MATCH');
  });

});
