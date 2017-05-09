import { browser } from 'protractor';
import { LoginPageObject } from '../pages/login.page';
import { defineSupportCode } from 'cucumber';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

/*
StepDefinition files act as the glue code between config and feature files
They drive the feature files from the background
**/
defineSupportCode(({Given, When, Then}) => {
  let page: LoginPageObject = new LoginPageObject();

  Given(/^I am on login page with title "(.*?)"$/, (url: string) => {
    return browser.get(url);
  });

  When(/^I click Acknowledge and Continue button$/, () => {
    return page.continueButton.click();
  });

  Then(/^I should see login popup$/, (result: string) => {
    return expect(page.loginPopup).to.eventually.be.present();
  });
})

