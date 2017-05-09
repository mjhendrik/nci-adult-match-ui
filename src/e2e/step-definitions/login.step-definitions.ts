import { browser } from 'protractor';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

import { binding, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

import { LoginPageObject } from '../pages/login.page';

@binding()
class LoginSteps {
  private page = new LoginPageObject();
  
  @given(/^I am on login page with title '(.*)'$/)
  private given(title: string, callback: CallbackStepDefinition) {
    this.page.navigate();
    expect(browser.getTitle()).to.eventually.be.equal(title).and.notify(callback);
  }
 
  @when(/^I click Acknowledge and Continue button$/)
  private when(callback: CallbackStepDefinition) {
    this.page.continueButton.click();
    callback();
  }

  @then(/^I should see login popup$/)
  private then(callback: CallbackStepDefinition) {
    expect(this.page.loginPopup).to.eventually.be.present().and.notify(callback);
  }
}
