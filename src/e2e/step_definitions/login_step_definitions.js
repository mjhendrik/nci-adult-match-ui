var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;

var loginPage = require('../pages/login_page.js');

module.exports = function() {
  this.Given(/^I go to "([^"]*)"$/, function(site) {
    browser.get(site);
  });

  this.When(/^I add see page title "([^"]*)"$/, function(title) {
    browser.getTitle().to.eventually.equal(title);
  });

  this.And(/^I click Acknowledge and Continue button"$/, function() {
    loginPage.continue();
  });

  this.Then(/^I should see login popup$/, function() {
    loginPage.loginPopup.to.be.present();
  });
}
