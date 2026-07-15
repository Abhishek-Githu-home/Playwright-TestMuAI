# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install                                        # install deps (also runs `npx playwright install` separately, see below)
npx playwright install --with-deps                 # install browser binaries (required once, and in CI)

npx playwright test                                 # run the full suite (local config, chromium)
npx playwright test tests/Assignment.spec.js        # run the single spec file
npx playwright test -g "Verification of @TestScenario-1"  # run one scenario by name
npx playwright test --headed                        # see the browser while it runs
npx playwright test --debug                         # step through with the Playwright inspector
npx playwright test --ui                            # Playwright UI mode

npm run test:testmuai                                # run against the TestMuAI cloud grid (playwright.cloud.config.cjs)
npm run test:testmuai:chrome                         # same, pinned to the testmuai-chrome project

npx playwright show-report                           # view the local HTML report
allure generate --clean -o allure-report && allure open allure-report   # regenerate/view the Allure report
```

There is no lint or typecheck script configured in `package.json`.

### Cloud grid setup
`npm run test:testmuai*` requires a `.env` file (copy from `.env.example`) with `TESTMUI_WS_ENDPOINT` set to a TestMuAI cloud WebSocket URL. [playwright-single.js](playwright-single.js) reads this via `dotenv` and throws immediately if it's missing — this is what `playwright.cloud.config.cjs` connects to via `connectOptions.wsEndpoint` instead of launching a local browser.

## Architecture

This is a single-suite Playwright test project with **no application code** — it drives the public, externally-hosted site `https://www.testmuai.com/selenium-playground/` (a Selenium/Playwright practice ground) directly. There is nothing to build and no local server; tests are pure browser automation against a live third-party site, so behavior can shift if that site changes.

- **[tests/Assignment.spec.js](tests/Assignment.spec.js)** — the entire suite, three scenarios in one `describe` block: Simple Form Demo (text input round-trip), Drag & Drop Slider, and a multi-field Input Form submission.
- **[Fixtures/TestData.js](Fixtures/TestData.js)** — all test data (URLs, form values, expected strings) is centralized here and required into the spec via `require('../Fixtures/TestData.js')`. Add new fixture values here rather than hardcoding strings in the spec.
- **Two parallel Playwright configs, not one:**
  - **[playwright.config.js](playwright.config.js)** (ESM, `import`/`export default`) — the default local config, runs against a real launched Chromium, HTML reporter.
  - **[playwright.cloud.config.cjs](playwright.cloud.config.cjs)** (CommonJS) — used only by the `test:testmuai*` scripts. Instead of launching a browser locally, it connects over CDP to a remote TestMuAI cloud grid endpoint (via `playwright-single.js`), with its own `testmuai-chrome` project and a separate `playwright-cloud-report/` output folder.
  - Both point `testDir` at the same `./tests` folder, so any spec added there runs under either config depending on which npm script is used.

### Non-obvious gotcha: client-side navigation needs a settle wait
The target site is a client-rendered SPA. Navigating via a link click updates the URL (and `waitForURL` resolves) before the destination page's form has finished hydrating. Filling/clicking immediately after `waitForURL` can silently act on a not-yet-interactive form (no error, just no effect). The fix used in this suite is an explicit `await page.waitForLoadState('networkidle')` after the URL wait and before interacting with the new page — don't remove it without re-verifying, and apply the same pattern if adding new in-page navigations.

### Report artifacts are not committed
`allure-report/`, `index.html` (the Allure index at repo root), and `playwright-cloud-report/` are generated output and are gitignored — don't hand-edit or re-commit them; regenerate with the commands above instead.
