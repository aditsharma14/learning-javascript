# Interactive Counter Practice

This small example implements an interactive follower counter using DOM manipulation and simple control flow.

Files
- `index.html` — page that shows the account holder name, the follower count (`id="countDisplay"`), and a `Follow` button that calls `increasecount()`.
- `script.js` — contains the counter logic:
  - `count` (number) stores the current follower count.
  - `displayCount()` updates the `countDisplay` element.
  - `increasecount()` increments the counter, updates the display, and calls `checkCountValue()`.
  - `checkCountValue()` shows alerts when the follower count reaches 10 or 20.

Behavior
- Clicking the `Follow` button increments the count by one and updates the on-page display.
- When the count reaches 10 or 20, the script shows a congratulatory alert.

How to run
- Open [index.html](function/practice/index.html) in a browser and click the `Follow` button.

Notes & tips
- The counter is stored in a variable in memory; refreshing the page resets it to `0`.
- You can change the threshold values in `checkCountValue()` or replace alerts with custom UI feedback.
- For accessibility, consider replacing `onclick` with an event listener in `script.js` and adding ARIA attributes.
