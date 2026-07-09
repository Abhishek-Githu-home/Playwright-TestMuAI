# Playwright-TestMuAI

## 👤 Author: **Abhishek K M**

[![Playwright Tests](https://github.com/Abhishek-Githu-home/Playwright-TestMuAI/actions/workflows/playwright.yml/badge.svg?branch=main)](https://github.com/Abhishek-Githu-home/Playwright-TestMuAI/actions/workflows/playwright.yml)

This repository features the automated testing flows assigned as part of the **Playwright Test MUAI certification process**. It includes a structured suite of end-to-end tests built with **Playwright** and **JavaScript**, designed to validate core web application functionalities.

## 📋 Project Overview

This project demonstrates comprehensive automation testing practices using Playwright, covering:
- Web application UI interaction and validation
- Form submission and input handling
- User navigation and page state verification
- Test data management and fixtures
- Automated report generation with Allure

## 🎯 Goals & Objectives

- ✅ Master Playwright automation testing framework
- ✅ Develop robust end-to-end test scenarios
- ✅ Implement best practices for test organization and structure
- ✅ Generate comprehensive test reports (HTML and Allure)
- ✅ Validate core web application functionalities across multiple scenarios
- ✅ Create reusable test data fixtures and utilities

## 📁 Project Structure

```
Playwright-TestMuAI/
├── tests/                          # Test files directory
│   └── Assignment.spec.js          # Main test suite with 3 test scenarios
├── Fixtures/                       # Test data and fixtures
│   └── TestData.js                 # Centralized test data repository
├── playwright.config.js            # Playwright configuration
├── package.json                    # Project dependencies
├── package-lock.json               # Locked dependency versions
├── .gitignore                      # Git ignore rules
├── allure-report/                  # Allure test reports (generated)
├── playwright-report/              # HTML test reports (generated)
└── index.html                      # Allure report index
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Install Dependencies

```bash
npm install
```

This command will install:
- `@playwright/test` - Playwright testing framework
- `@types/node` - TypeScript type definitions for Node.js
- `allure-commandline` - Allure report generation tool

## 🚀 Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run Tests in Specific Browser

```bash
# Chromium only
npx playwright test --project=chromium
```

### Run Tests with UI Mode

```bash
npx playwright test --ui
```

### Run Tests in Debug Mode

```bash
npx playwright test --debug
```

### Run Specific Test File

```bash
npx playwright test tests/Assignment.spec.js
```

### Run Tests with Specific Test Name

```bash
npx playwright test -g "Verification of @TestScenario-1"
```

### Run Tests in Headed Mode (See Browser)

```bash
npx playwright test --headed
```

## 📊 Test Scenarios

The `Assignment.spec.js` file contains three comprehensive test scenarios:

### **Test Scenario 1: Simple Form Demo**
- **Location:** `tests/Assignment.spec.js` - Test 1
- **Test ID:** `@TestScenario-1`
- **Purpose:** Verify simple form input and output functionality
- **Steps:**
  1. Navigate to the Selenium Playground
  2. Click on "Simple Form Demo"
  3. Enter the message: "Welcome to TestMu AI"
  4. Click the submit button
  5. Verify the entered message is displayed correctly

### **Test Scenario 2: Drag & Drop Sliders**
- **Location:** `tests/Assignment.spec.js` - Test 2
- **Test ID:** `@TestScenario-2`
- **Purpose:** Test drag and drop slider functionality
- **Steps:**
  1. Navigate to the Selenium Playground
  2. Click on "Drag & Drop Sliders"
  3. Verify default slider value is 15
  4. Move the slider to value 95
  5. Verify the slider value has been updated to 95

### **Test Scenario 3: Input Form Submission**
- **Location:** `tests/Assignment.spec.js` - Test 3
- **Test ID:** `@TestScenario-3`
- **Purpose:** Validate comprehensive form submission with multiple fields
- **Steps:**
  1. Navigate to "Input Form Submit" page
  2. Fill in all form fields with test data:
     - Username: User001
     - Email: User@001
     - Password: User@0101
     - Company: NVDIA
     - URL: https://www.testmuai.com/selenium-playground
     - Country: United States
     - Address 1 & 2
     - State: Arkansas
     - Zip Code: 720382
  3. Submit the form
  4. Verify success message: "Thanks for contacting us, we will get back to you shortly."

## 📝 Test Data Management

Test data is centralized in `Fixtures/TestData.js` for easy maintenance and updates:

```javascript
module.exports = {
    VariableValue: 'Welcome to TestMu AI',
    URL: 'https://www.testmuai.com/selenium-playground/',
    Title: 'Selenium Grid Online | Run Selenium Test On Cloud',
    Username: 'User001',
    Email: 'User@001',
    Password: 'User@0101',
    Country: 'United States',
    MoveSlider: '95',
    // ... additional test data
}
```

## 📄 Configuration

### Playwright Configuration (`playwright.config.js`)

Key configurations:
- **Test Directory:** `./tests`
- **Default Reporter:** HTML reporter
- **Parallel Execution:** Enabled (`fullyParallel: true`)
- **Trace Collection:** On first retry (`trace: 'on-first-retry'`)
- **Default Project:** Chromium browser
- **CI Settings:**
  - Retries: 2 (on CI only)
  - Workers: 1 (on CI only)

## 📊 Viewing Test Reports

### HTML Report

After running tests, view the HTML report:

```bash
npx playwright show-report
```

Or open `playwright-report/index.html` in your browser.

### Allure Report

Generate and view Allure report:

```bash
allure generate --clean -o allure-report
allure open allure-report
```

## 🔧 Available NPM Scripts

Currently, the `package.json` has an empty scripts section. You can add these custom scripts:

```json
"scripts": {
  "test": "playwright test",
  "test:headed": "playwright test --headed",
  "test:ui": "playwright test --ui",
  "test:debug": "playwright test --debug",
  "test:chromium": "playwright test --project=chromium",
  "report": "playwright show-report",
  "report:allure": "allure open allure-report"
}
```

Then run with: `npm run test:ui`, etc.

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| @playwright/test | ^1.61.1 | Testing framework |
| @types/node | ^26.1.0 | TypeScript definitions |
| allure-commandline | ^2.43.0 | Report generation |

## 🔍 Key Testing Practices Demonstrated

- ✅ **Locator Strategies:** CSS selectors, XPath, role-based selectors
- ✅ **User Interactions:** Click, fill, hover, select options
- ✅ **Wait Strategies:** Wait for URL changes, DOM content loaded
- ✅ **Assertions:** URL verification, text matching, value checks
- ✅ **Console Logging:** Debug output for verification
- ✅ **Test Data Fixtures:** Centralized test data management
- ✅ **Test Organization:** Describe blocks and organized test structure
- ✅ **Browser Context:** Isolated test contexts for cleaner tests

## 🌐 Test Environment

**Target Website:** https://www.testmuai.com/selenium-playground/

This website provides various interactive elements for testing:
- Simple form inputs
- Drag and drop sliders
- Form submissions
- Navigation elements

## 📝 Notes

- Tests are configured to run in **parallel** by default for faster execution
- HTML reports are generated after each test run
- Traces are collected on test retry for debugging
- Currently testing in **Chromium** browser (Firefox and Safari configurations are available but commented out)
- Mobile and branded browser testing options are available in the config but can be uncommented as needed

## 🐛 Troubleshooting

### Tests Fail with Timeout
Increase timeout in `playwright.config.js` or use `page.setDefaultTimeout(timeout_ms)`

### Browser Not Starting
Ensure Playwright browsers are installed:
```bash
npx playwright install
```

### Permission Denied on macOS
Grant execution permissions:
```bash
chmod +x node_modules/.bin/playwright
```


