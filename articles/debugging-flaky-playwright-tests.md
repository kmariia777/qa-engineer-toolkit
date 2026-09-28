# Debugging Flaky Playwright Tests

A checklist that fixes most flakiness.

## 1. Use web-first assertions

`expect(locator).toBeVisible()` auto-retries. Avoid `expect(await locator.isVisible()).toBe(true)` — no retry there.

## 2. Never use fixed sleeps

Replace `waitForTimeout(3000)` with waiting on something real: `await expect(...)`, `waitForResponse`, or `waitForLoadState('networkidle')` (sparingly).

## 3. Isolate test data

Flakes often come from shared state. Create data via API in `beforeEach`, clean up after. Don't depend on test order.

## 4. Read the trace

Run with `--trace on`, open the trace viewer (`npx playwright show-trace`), and watch what the test actually did frame by frame.

## 5. Retry with a reason

`retries: 2` in CI is fine as a safety net, not a fix. If a test only passes on retry, it's still broken — quarantine and investigate.

## 6. Check the environment

Slow CI runners, rate-limited test APIs, and animations cause flakes that no locator strategy will fix.
