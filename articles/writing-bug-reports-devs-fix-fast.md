# Writing Bug Reports Devs Fix Fast

A good bug report gets fixed fast. A vague one gets bounced back with "can't reproduce." The difference is usually 5 minutes of extra care.

## What a developer needs to fix it

1. **What broke** — in one clear sentence
2. **Where** — environment, build, URL, test data
3. **How to see it** — exact steps, not "go and try"
4. **What you expected vs. what happened**
5. **Proof** — screenshot, video, logs, network response

If any of these are missing, the dev has to guess — and guessing is slow.

## Title that works

Bad: `Checkout broken`
Good: `[Checkout] Payment fails with 500 on Visa ending 4242 — staging, build 1.4.2`

Formula: `[Area] What's wrong + where/when`

## Body structure I use

**Environment:** staging, Chrome 126, build 1.4.2, user `qa-test-03`
**Preconditions:** cart has 1 item, logged in
**Steps:**
1. Go to checkout
2. Enter Visa 4242 4242 4242 4242, any future expiry
3. Click Pay
**Expected:** order confirms, user sees confirmation page
**Actual:** 500 error, "Payment failed" toast, no order created
**Evidence:** screenshot + HAR file / console log
**Severity / Priority:** S2 — blocks checkout for card payments
**Notes:** works with Mastercard; fails 3/3 with Visa on staging, not repro on prod

## 5 habits that speed up fixes

1. **One bug per report.** Two bugs in one ticket = half gets ignored.
2. **Repro 3 times before filing.** If it's flaky, say so and note the rate.
3. **Include the obvious.** Build number, test user, data setup — don't make devs ask.
4. **Show, don't describe.** A 20-second video beats 3 paragraphs.
5. **Suggest impact, not solution.** "Blocks all Visa payments on staging" helps triage. "Fix the API" doesn't.

## What I skip

- Blame or urgency theater ("URGENT!!!"). Severity speaks for itself.
- Giant dumps of irrelevant logs. Trim to the failing request.
- "It doesn't work." That's a feeling, not a report.

---

Pair this with `templates/bug-report-template.md` in this repo — it's the copy-paste version of this structure.
