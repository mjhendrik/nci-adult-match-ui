import { browser, $, by, element, ElementFinder } from 'protractor';

export class LoginPageObject {
  continueButton: ElementFinder = element(by.cssContainingText('.btn', 'Acknowledge and Continue'));
  loginPopup: ElementFinder = element(by.css('auth0-lock-container'));
  
  navigate() : any {
    browser.get('');
  }  
}