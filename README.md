# Coffee Cart checkout tests

Five TypeScript end-to-end tests exercise the [Coffee Cart demo](https://coffee-cart.app/) in Chromium using Playwright. Coffee Cart is one of the practice projects in this repository.

## What the tests check

| Scenario | Expected result |
| --- | --- |
| Order one espresso | Submitting the payment form shows an order confirmation. |
| Order one of every drink | Every drink appears in the cart and checkout shows a confirmation. |
| Add a second espresso | The total changes from $10 to $20 and checkout opens. |
| Confirm and then cancel adding a mocha | Confirming adds an $8 mocha. Cancelling the next addition keeps the total at $8. |
| Decline an offer, then accept the next one | The discounted mocha appears in the cart with quantity controls. |

The mocha test checks the total after **both** decisions. A dialog that closes on Cancel but still adds a drink would fail the second assertion. [Read the tests](coffee-shop-tests/order-coffe.spec.ts).

## Run from a fresh clone

Use Node.js 22 and run these commands from the repository root. The tests need network access to the public demo. The checkout form uses generated test data and requires no account.

```sh
npm ci
npx playwright install chromium
npx playwright test --project="Coffee Cart" --retries=0
```

On Linux, use `npx playwright install --with-deps chromium` to install browser system libraries as well. To inspect the last run locally, use `npx playwright show-report`.

## GitHub Actions

The [Coffee Cart workflow](.github/workflows/coffee-cart.yml) runs the same five tests without retries when the suite, workflow, Playwright configuration or package files change on a push. Open a run in the [Coffee Cart CI history](https://github.com/i5adovyi/coffee-cart-playwright/actions/workflows/coffee-cart.yml) and download `coffee-cart-report` under **Artifacts** for the HTML report.
