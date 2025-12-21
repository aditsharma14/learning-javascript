# Ternary Operator Example

This small example demonstrates using the JavaScript ternary operator to choose between two values or actions based on a condition.

Files
- `script.js` — contains a ternary expression that checks the `user` value and logs a welcome message for `Admin` or `Guest`.
- `index.html` — simple HTML wrapper to load `script.js` in a browser.

Behavior
- The script evaluates `user === "Admin"` and runs the first expression if true, otherwise the second.

Expected output
- With `user = "Admin"` the script logs: `Welcome Admin`.
- If you change `user` to any other string, it logs: `Welcome Guest`.

How to run
- In a browser: open [index.html](controlflow-conditional-statements/ternary-operators/index.html).
- With Node.js (from the workspace root):

```bash
node controlflow-conditional-statements/ternary-operators/script.js
```

Tips
- Modify the `user` value in `script.js` to test both outcomes.
- Replace the `console.log` calls with variable assignments if you need the result for further logic.
