# Risk-Based Testing in Practice

Risk-based testing means spending your limited testing time where failure hurts most — not covering everything equally.

## A simple way to start

1. List what can break (features, integrations, data flows).
2. Score each by **impact** (what happens if it fails in production?) and **likelihood** (how often does this area change? how complex is it?).
3. Test high impact × high likelihood first and deepest. Low/low gets a smoke check or nothing.

## Example matrix

| Area | Impact | Likelihood | Priority |
|---|---|---|---|
| Checkout payment flow | High | High | P0 — full regression + exploratory |
| Password reset email | Medium | Low | P2 — happy path |
| Footer link text | Low | Low | P3 — skip or spot-check |

## Tips that actually help

- Re-score every release. Risk moves as code changes.
- Pair risk analysis with exploratory charters (see `templates/exploratory-charter-template.md`) for the high-risk areas.
- Tell stakeholders what you *didn't* test and why — that's the point of the method.
- Risk-based testing doesn't replace automation; it tells automation what to cover first.
