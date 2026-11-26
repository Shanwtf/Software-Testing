# Test Cases

| Test Case ID | Test Scenario | Preconditions | Test Steps | Expected Result | Actual Result | Execution Status |
|---|---|---|---|---|---|---|
| TC-01 | Homepage opens successfully | Internet access available | Open the homepage URL | Page loads and main body is visible | Passed in Chromium, Firefox, and WebKit | Pass |
| TC-02 | Homepage response is acceptable | Homepage reachable | Request homepage and inspect HTTP status | Response is below 400 and page remains valid | Passed in Chromium, Firefox, and WebKit | Pass |
| TC-03 | Page title is correct | Homepage available | Read the document title | Title contains GeeksforGeeks | Passed in Chromium, Firefox, and WebKit | Pass |
| TC-04 | Navigation menu contains key links | Homepage loaded | Read visible navigation items | Important links like Courses or Practice are visible | Passed in Chromium, Firefox, and WebKit | Pass |
| TC-05 | Search for Java works | Homepage and search are available | Open search, type Java, and submit | Java search results page loads with visible content | Validated on the live site; headed test types the query character by character | Pass |
| TC-06 | Public tutorial page loads | Tutorial URL is accessible | Open the Java tutorial page | Tutorial content area and heading are visible | Passed in Chromium, Firefox, and WebKit | Pass |
| TC-07 | Content page to homepage navigation works | Tutorial page loaded | Navigate to homepage from tutorial | Homepage route is reached | Passed in Chromium, Firefox, and WebKit | Pass |
| TC-08 | Accessibility smoke checks pass | Homepage loaded | Check title and key interactive elements | Page has a meaningful title and nameable controls | Passed in Chromium, Firefox, and WebKit | Pass |
| TC-09 | Keyboard navigation reaches a focus target | Homepage loaded | Press Tab and inspect the active element | A visible focus target receives focus | Passed in Chromium, Firefox, and WebKit | Pass |
| TC-10 | Unusual search query is handled | Search page reachable | Open a query route with encoded special characters | Page responds without crashing and body is visible | Passed in Chromium, Firefox, and WebKit | Pass |
