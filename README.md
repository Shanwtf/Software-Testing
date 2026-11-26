# GeeksforGeeks Website Automation Testing Using Playwright

## Project title and author

Project: GeeksforGeeks Website Automation Testing Using Playwright
Author: Yogya Sharma

## Project overview

This project demonstrates practical software testing using Playwright Test. It automates smoke and functional checks against the public GeeksforGeeks website, validates page loading behaviors, tests public navigation and tutorial content, and documents results using HTML reporting.

## Problem statement

The goal is to create a maintainable, real-world automation project that tests a live public website without violating access restrictions, user-data changes, or rate limits. The work also demonstrates how to organize a college-level software testing project with automation, reporting, and documentation.

## Project objectives

- Automate homepage, navigation, search, content, and accessibility checks
- Use Playwright as the primary runner
- Validate public pages with real browser automation
- Generate reusable utilities and a page object model
- Produce test documentation and an HTML report

## Technologies used

- JavaScript
- Node.js
- Playwright Test
- Chromium, Firefox, WebKit
- HTML reporting
- Git and GitHub compatibility

## Prerequisites

- Node.js 18 or later
- npm
- Internet access to access https://www.geeksforgeeks.org/

## Installation instructions

1. Clone or download the project.
2. Open a terminal in the project root.
3. Run:

```bash
npm install
npx playwright install --with-deps chromium firefox webkit
```

## Project structure

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml
├── docs/
│   ├── bug-report-template.md
│   ├── test-cases.md
│   └── test-plan.md
├── pages/
│   └── HomePage.js
├── test-data/
│   └── testData.js
├── tests/
│   ├── accessibility.spec.js
│   ├── content.spec.js
│   ├── homepage.spec.js
│   ├── navigation.spec.js
│   └── search.spec.js
├── utils/
│   └── testHelpers.js
├── .gitignore
├── package.json
├── playwright.config.js
├── playwright.headed.config.js
├── README.md
└── playwright-report/
```

## Commands to execute tests

To watch every test run against the live GeeksforGeeks site in visible browser
windows, run:

```bash
npm run test:headed
```

The test names and results appear in the terminal as they run. This command runs
all configured browsers (Chromium, Firefox, and WebKit) sequentially. Tests
finish when their assertions pass instead of waiting for a fixed observation
period. Text is typed character by character in the visible browser so typing
flows, such as the Java search, can be observed.

For the normal headless run across all configured browsers, use:

```bash
npm test
npm run test:chromium
npx playwright test tests/homepage.spec.js
npm run test:report
```

## Instructions to view the HTML report

After running the suite:

```bash
npm run test:report
```

The HTML report is generated under the `playwright-report` directory.

## Explanation of each test module

- `homepage.spec.js`: verifies total page load, page title, response status, body visibility, and key homepage content
- `navigation.spec.js`: checks public navigation links and route transitions
- `search.spec.js`: types a query into the visible search control and checks results, plus an unusual query route
- `content.spec.js`: loads a public tutorial page and verifies main content and title/heading visibility
- `accessibility.spec.js`: validates meaningful title and accessible names for common controls with a basic keyboard smoke test

## Troubleshooting instructions

- If Playwright browsers are missing, run `npx playwright install --with-deps chromium firefox webkit`.
- If the site blocks automation, re-run with `--project=chromium` and inspect the generated screenshot and trace.
- If selectors are unstable, prefer the accessible locators already used in the suite and verify the current page structure before changing assertions.
- If a live site returns non-200 status pages or anti-bot challenges, document the limitation rather than forcing the test to pass.

## Known limitations

- Some live websites change layout or content without notice.
- Public websites may occasionally block automation or present anti-bot challenges.
- This is a smoke and functional automation project, not a complete accessibility audit or full end-to-end QA suite.
