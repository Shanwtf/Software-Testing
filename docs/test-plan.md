# Test Plan

## 1. Testing objectives

The goal of this project is to verify that the public GeeksforGeeks website can be reached and that important public pages, navigation elements, content pages, and accessibility smoke checks behave as expected during automated browser testing.

## 2. Scope

In scope:
- Homepage accessibility and stability
- Navigation to public pages and sections
- Search route behavior for public content topics
- Public tutorial content pages
- Accessibility smoke checks for key page content

Out of scope:
- User authentication or personalized account flows
- Paid subscription or course enrollment activities
- Backend APIs or internal CMS tools
- Payment, profile management, or data-changing operations

## 3. Test environment

- Operating system: Windows 11 / GitHub Actions Ubuntu
- Browser matrix: Chromium, Firefox, WebKit
- Runtime: Node.js 18+ and Playwright Test
- Base URL: https://www.geeksforgeeks.org/

## 4. Test strategy

The suite prioritizes public, non-authenticated pages and uses accessible locators where possible. Each test validates real responses and visible content without relying on fragile CSS selectors. Tests are designed to fail when important content is missing, when the site is blocked, or when the page layout changes unexpectedly.

## 5. Entry criteria

- Node.js installed and project dependencies installed
- Playwright browsers installed successfully
- Internet access available to the target website
- Test environment has sufficient timeouts for live-site navigation

## 6. Exit criteria

- All executable tests finish without unexpected environment blockage
- Report recorded in HTML format
- Any remaining limitations documented clearly

## 7. Risks and limitations

- Public websites can change markup or navigation layouts without notice.
- Some pages may block automated browsers or show anti-bot challenges.
- External pages or redirects may not always be stable or accessible for automated scripting.
- Accessibility validation in this project is a smoke test, not a full WCAG compliance audit.
