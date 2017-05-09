Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: Protractor and Cucumber Test
        Given I am on login page with title "NCI Adult Match"
        When I click Acknowledge and Continue button
        Then I should see login popup
    