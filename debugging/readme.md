# Debugging Example

## Description

This folder contains a minimal HTML page and a small script intended to demonstrate basic DOM interaction and debugging in plain JavaScript. It accepts two numbers from the user and displays their multiplication result.

Files:

- `index.html` — UI with two numeric inputs and a button.
- `script.js` — logic that reads inputs, multiplies them, and shows the result.
- `style.css` — page styling.

## How to run

1. Open `index.html` in a browser (no server required).
2. Enter numbers into the two fields and click **Perform Operation**.
3. The computed result will appear in the result area.

## Known issues and suggested fixes (in `script.js`)

The shipped `script.js` currently contains a few bugs you can practice fixing:

- It incorrectly uses `require("path")` (Node-style) which is not valid in browser JavaScript. Remove that line.
- The second input is queried with the wrong id (`document.getElementById("input")`) — the page uses `input2`. Change to `input2`.
- The `isNaN` check is used incorrectly. Replace `if(!NaN(num1) && !NaN(num2))` with `if (!isNaN(num1) && !isNaN(num2))`.
- Error message text is misleading: use something like `Please enter valid numbers`.

A corrected minimal `performOperation()` implementation:

```js
function performOperation() {
  const num1 = parseInt(document.getElementById("input1").value, 10);
  const num2 = parseInt(document.getElementById("input2").value, 10);

  if (!isNaN(num1) && !isNaN(num2)) {
    const result = num1 * num2;
    document.getElementById("result").innerText = `The result is: ${result}`;
  } else {
    document.getElementById("result").innerText = "Please enter valid numbers.";
  }
}
```

## Debugging tips

- Use `console.log()` to inspect variable values (e.g., `console.log(num1, num2)`).
- Open the browser DevTools Console to view runtime errors (reference the script filename and line number shown there).
- Use `debugger;` statements to pause execution and step through code.

## Next steps / improvements

- Add input validation (min/max) and nicer error UI.
- Add keyboard support (Enter to compute).
- Add tests or simple input presets for quick checks.
