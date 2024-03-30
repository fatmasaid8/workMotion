import LoginPage from '../support/page_objects/LoginPage';
import HomePage from '../support/page_objects/HomePage';
import TalentDetailsWizard from '../support/page_objects/TalentDetailsWizard';
import TalentsListPage from '../support/page_objects/TalentsListPage';

describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login');
    Cypress.on('uncaught:exception', () => { return false })
    LoginPage.login('aliaa+qahrmanager@workmotion.com', 'Test1234')
    LoginPage.checkErrorMessageAndRetry()
  });


  it.only('E2E - Create new talent and assert onboarding actions', () => {
    const startTime = Date.now()
    cy.get(LoginPage.loginButton, { timeout: 15000 }).should('not.exist')
    HomePage.addTalentAndStartWorkGlobalOnboarding("Germany")
    TalentDetailsWizard.fillInFirstPage("Automation", "Tester_" + startTime, "11/11/2000", "Yes", "Yes", "No", "Yes")
    TalentDetailsWizard.fillInSecondPage("QA Engineer", "English Description.", "German Description.",
      "full-time", "fixed-term", "05/06/2024", "05/05/2025", "Name", "Title")
    TalentDetailsWizard.fillInThirdPage("25", "No", "No", "5")
    TalentDetailsWizard.fillInFourthPage("No", "No", "4000", "No", "No", "No")
    TalentDetailsWizard.fillInFifthPage("test@example" + startTime + ".com")
    TalentDetailsWizard.fillInSixthPage()
    TalentDetailsWizard.gotToTalentListAfterSuccess()
    TalentsListPage.clickOnButton("Onboarding")
    TalentsListPage.clickOnCellTextRedirection("Automation Tester_" + startTime)
    TalentsListPage.clickOnActionsButton()
    TalentsListPage.assertViewedTalentActions(['Re-invite employee'])
  });
});
