export class HomePage {
  constructor() {
    // Define the CSS classes for the elements
    this.addButton = 'svg[data-testid="AddIcon"]';
    this.selectCountryCombobox = 'input[id="select-country"]';
    this.getStartedButton = 'button[id="onboarding-get-started-btn"]';
    this.workGlobalOption = '[data-testid="onboarding-product-workglobal"]';
    this.workDirectOption = '[data-testid="onboarding-product-workdirect"]';
    this.beginOnboardingButton = 'button[data-cy="product-selection-begin-onboarding-btn"]';
  }

  addTalentAndStartWorkGlobalOnboarding(country) {
    cy.get(this.addButton, { timeout: 10000 }).click()
    cy.get(this.selectCountryCombobox, { timeout: 20000 }).clear().type(country + '{enter}')
    cy.get(this.getStartedButton).should('be.visible').click()
    cy.get(this.workGlobalOption).click()
    cy.get(this.beginOnboardingButton).click()
  }


}
export default new HomePage();