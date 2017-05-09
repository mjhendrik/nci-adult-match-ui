import { browser } from 'protractor';

import { defineSupportCode } from 'cucumber';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import { LoginPageObject } from '../pages/login.page';

defineSupportCode(({Given, When, Then}) => {
  let page: LoginPageObject = new LoginPageObject();

  Given(/^I am on login page with title "(.*?)"$/, (title: string) => {
    page.navigate();
    return expect(browser.getTitle()).to.eventually.be.equal(title);
  });

  When(/^I click Acknowledge and Continue button$/, () => {
    return page.continueButton.click();
  });

  Then(/^I should see login popup$/, () => {
    return expect(page.loginPopup.isPresent()).to.eventually.be.true;
  });
})
