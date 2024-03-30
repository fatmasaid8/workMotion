export class FormElements {
    constructor() {
      this.datePopup = 'div[class*="MuiCalendarOrClockPicker"]';
      this.editDateInTextButton = 'button[class*="penIcon"]';
      this.dateTextboxInPopup = 'input[placeholder="DD/MM/YYYY"]';
      this.okButtonInDatePopup = 'button[data-cy="mui-datepicker-actions-accept"]';
      this.closeWarningButton = '[data-testid="side-drawer-close-button"] > *';
      this.warningPopupWrapper = '[data-testid="side-drawer-title"]'
    }
  
    fillInMultiUnitStepper(valueLabel, number) {
      const numberSelector = `[type='number']`
      cy.contains(valueLabel, { timeout: 10000 })
        .closest("[data-component-type='multi_unit_stepper']")
        .find(numberSelector).scrollIntoView().clear().type(number)
      cy.log("Multi unit stepper is filled with value: " + number)
    }
  
    fillInDate(textboxLabel, date) {
      const textboxSelector = `input[type='text']`
      cy.contains(textboxLabel).closest("[data-component-type='input']")
        .find(textboxSelector, { timeout: 10000 })
        .scrollIntoView().click()
      cy.get(this.datePopup).find(this.editDateInTextButton).click()
      cy.get(this.datePopup).find(this.dateTextboxInPopup).click().clear().type(date)
      cy.get(this.okButtonInDatePopup).click()
      cy.log("Date field for:" + textboxLabel + " is filled with value: " + date)
    }
  
    fillInTextbox(textboxLabel, dataSrting) {
      const textboxSelector = `[type='text'], [data-cy*='textarea'],[type='email']`
      cy.contains(textboxLabel, { timeout: 20000 })
        .closest("[data-component-type='input'], [data-component-type='text_area']")
        .find(textboxSelector)
        .scrollIntoView().clear().type(dataSrting)
    }
  
    selectRadioButton(questionText, option) {
      const radioButtonSelector = `input[type='radio'][value='${option}']`
      cy.contains(questionText, { timeout: 10000 }).closest("[data-component-type='collection']")
        .find(radioButtonSelector)
        .scrollIntoView().click();
      this.clickCloseWarningButtonIfExists()
    }
  
    clickCloseWarningButtonIfExists() {
      cy.get('body').then(($body) => {
        if ($body.find(this.closeWarningButton).length > 0) {
          cy.get(this.closeWarningButton).scrollIntoView().click()
          cy.get(this.warningPopupWrapper, { timeout: 10000 }).should('not.exist')
        }
      })
    }
  
  }
  export default new FormElements();