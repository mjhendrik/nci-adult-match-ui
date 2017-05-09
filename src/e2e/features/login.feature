Feature: Running Cucumber with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: Protractor and Cucumber Test
        Given I go to "/"
        When I see page title "NCI Adult Match"
        And I click Acknowledge and Continue button
        Then I should see login popup
    