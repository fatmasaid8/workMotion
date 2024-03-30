# WorkMotion Cypress Tests

This repository contains Cypress tests for the WorkMotion project.

## Installation

1. Clone this repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd workmotion-cypress-tests`
3. Install dependencies: `npm install`

## Running Tests

### Interactive Mode

To run Cypress in interactive mode, use the following command:

```npx cypress open```

This will open the Cypress Test Runner, where you can select and run individual tests.

### Headless Mode

To run Cypress in headless mode (for CI/CD), use the following command:

```npx cypress run```

This will run all tests in the terminal and output the results.

## Configuration

The Cypress configuration can be found in cypress.config.js. Modify this file to configure Cypress behavior, such as base URL, test files, and browser settings.

## Folder Structure

- cypress/e2e: Contains the test files.
- cypress/support: Contains custom commands and any other supporting files.
- cypress/support/page_objects: Contains commands for each page independantly base on page object design pattern (POM).