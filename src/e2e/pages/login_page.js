'use strict';

module.exports = {
  loginPage: {
    continueButton: element(by.text('Acknowledge and Continue')),
    loginPopup: element(by.css('auth0-lock-container'))
  },

  continue: function() {
      var page = this.loginPage;
      page.continueButton.click();
  }
}
