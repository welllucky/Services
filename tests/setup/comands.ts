// import { expect as baseExpect } from '@playwright/test';
// import type { Page, Locator } from '@playwright/test';

// export { test } from '@playwright/test';

// export const expect = baseExpect.extend({
//   async toHaveAmount(this: any,locator: Locator, expected: number, options?: { timeout?: number }) {
//     let pass: boolean;
//     let matcherResult: any;
//     try {
//       await baseExpect(locator).toHaveAttribute('data-amount', String(expected), options);
//       pass = true;
//     } catch (e: any) {
//       matcherResult = e.matcherResult;
//       pass = false;
//     }

//     const message = pass
//       ? () => this.utils.matcherHint('toHaveAmount', undefined, undefined, { isNot: this.isNot }) +
//           '\n\n' +
//           `Locator: ${locator}\n`,
//           `Expected: ${this.isNot ? 'not' : ''}${this.utils.printExpected(expected)}\n` +
//           (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : '')
//       : () => this.utils.matcherHint('toHaveAmount', undefined, undefined, expectOptions) +
//           '\n\n' +
//           `Locator: ${locator}\n`,
//           `Expected: ${this.utils.printExpected(expected)}\n` +
//           (matcherResult ? `Received: ${this.utils.printReceived(matcherResult.actual)}` : '');

//     return {
//       message,
//       pass,
//       name: 'toHaveAmount',
//       expected,
//       actual: matcherResult?.actual,
//     };
//   },
// });
