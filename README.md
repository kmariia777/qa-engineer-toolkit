# QA Engineer Toolkit 🧰

Practical templates, Playwright snippets, and short guides for QA engineers — maintained by Maria Kobylianska, Senior QA Engineer (FinTech).

## What's inside

- **templates/** — copy-paste bug report, lean test plan, and exploratory testing charter templates
- **playwright-snippets/** — small, runnable Playwright + TypeScript examples (API testing, network mocking, accessibility checks)
- **articles/** — short practical guides: risk-based testing, debugging flaky tests

## Reading list

- [Playwright docs](https://playwright.dev/docs/intro)
- [Playwright API testing](https://playwright.dev/docs/api-testing)
- [Playwright accessibility testing](https://playwright.dev/docs/accessibility-testing)
- [Ministry of Testing](https://www.ministryoftesting.com/)

## Running the snippets

```bash
npm init -y
npm i -D @playwright/test @axe-core/playwright
npx playwright install chromium
npx playwright test playwright-snippets
```

Snippets use public demo endpoints — swap in your own app's URLs.
