import {FormElements} from "./FormElements";

export class TalentDetailsWizard extends FormElements {
  constructor() {
    super(); 
    this.continueButton = 'button[type="submit"]';
    this.agreeOnSummaryCheckbox = 'input[data-cy="steps-confirm-summary-checkbox"]';
    this.successMessage = ':contains("Thank you for completing the onboarding experience!")';
    this.agreeOnSummaryNote = 'div[data-testid="checkbox-collection"]';
    this.gotToTalentListButton = 'button[data-testid="go-to-talent-list-btn"]';
  }

  fillInFirstPage(firstName, lastName, dateOfBirth, isGermanyCitizen, isExecutive, isValidGermanyAddress, isWorkFromHome) {
    this.fillInTextbox("Talent's first name", firstName)
    this.fillInTextbox("Talent's last name", lastName)
    this.fillInDate("Talent's date of birth", dateOfBirth)
    this.selectRadioButton("The talent is a citizen of Germany*", isGermanyCitizen)
    this.selectRadioButton("Is the talent an executive?*", isExecutive)
    this.selectRadioButton("Does the talent have a valid registered address in Germany?*", isValidGermanyAddress)
    this.selectRadioButton("Is the talent going to work from home?*", isWorkFromHome)
    cy.get(this.continueButton).scrollIntoView().click()
  }

  fillInSecondPage(jobTitle, jobDescriptionEnglish, jobDescriptionGerman, employmentType, contractType, startDate, endDate, signatoryName, signatoryTitle) {
    this.fillInTextbox("Job title", jobTitle)
    this.fillInTextbox("Job description in English", jobDescriptionEnglish)
    this.fillInTextbox("Job description in German", jobDescriptionGerman)
    this.selectRadioButton("Employment type", employmentType)
    this.selectRadioButton("Contract type", contractType)
    this.fillInDate("Contract start date", startDate)
    this.fillInDate("Contract end date", endDate)
    this.fillInTextbox("Name of signatory", signatoryName)
    this.fillInTextbox("Title of signatory", signatoryTitle)
    cy.get(this.continueButton).scrollIntoView().click()
  }

  fillInThirdPage(paidTimeoffDays, doesHaveProbationPeriod, doYouHaveEmploymentRelationship, terminationPeriodDays) {
    this.fillInMultiUnitStepper("Paid time off", paidTimeoffDays)
    this.selectRadioButton("Shall the talent have a probationary period?", doesHaveProbationPeriod)
    this.selectRadioButton("Did you have a prior employment relationship/contract with the talent?", doYouHaveEmploymentRelationship)
    this.fillInMultiUnitStepper("Termination Notice period", terminationPeriodDays)
    cy.get(this.continueButton).scrollIntoView().click()
  }

  fillInFourthPage(doOfferHealthInsurance, doEsopOrVsop, baseMonthlySalary, doFixedBonus, doVariableBonus, doAnyAllowances) {
    this.selectRadioButton("Would you like to offer your talent private health insurance?", doOfferHealthInsurance)
    this.selectRadioButton("Do you intend to provide ESOP, VSOP or any other type of employee participation to your talent?", doEsopOrVsop)
    this.fillInTextbox("Base salary/month", baseMonthlySalary)
    this.selectRadioButton("Does the talent receive a fixed bonus?", doFixedBonus)
    this.selectRadioButton("Does the talent receive any variable bonus?", doVariableBonus)
    this.selectRadioButton("Does the talent receive any allowances?", doAnyAllowances)
    cy.get(this.continueButton).scrollIntoView().click()
  }

  fillInFifthPage(talentEmail) {
    this.fillInTextbox("Talent's email", talentEmail)
    cy.get(this.continueButton).scrollIntoView().click()
  }

  fillInSixthPage() {
    cy.get(this.agreeOnSummaryNote, { timeout: 10000 }).find('p').scrollIntoView().click()
    cy.get(this.continueButton).find('span').scrollIntoView().click()
    cy.get(this.successMessage, { timeout: 15000 }).should('be.visible')
  }

  gotToTalentListAfterSuccess() {
    cy.get(this.gotToTalentListButton, {timeout:10000}).click()
  }
}
export default new TalentDetailsWizard();