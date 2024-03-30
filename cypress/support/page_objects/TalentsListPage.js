export class TalentsListPage {
  constructor() {
    this.actionsButton = 'button[data-cy="actions-btn"]';
  }

  // There is a bug in case of quick navigation to the talent's page that the wizard's success message is displayed
  // again instead of the talent's details page, the static waits here are just a workaround until the bug is fixed
  clickOnButton(buttonText) {
    cy.wait(10000)
    cy.contains('button', buttonText, { timeout: 10000 }).click();
  }

  clickOnCellTextRedirection(cellText) {
    cy.wait(10000)
    cy.contains('[data-cy="talents-name-cell"]', cellText, { timeout: 10000 }).click();
  }

  clickOnActionsButton() {
    cy.wait(10000)
    cy.get(this.actionsButton, { timeout: 10000 }).click()
  }

  assertViewedTalentActions(expectedActions) {
    cy.get('span').contains('Actions').closest('div[data-mobile-style]').within(() => {
      cy.get('p').should(($p) => {
        const actionsText = $p.map((index, element) => Cypress.$(element).text()).get();
        expect(actionsText).to.deep.equal(expectedActions);
      });
    });
  }

}
export default new TalentsListPage();