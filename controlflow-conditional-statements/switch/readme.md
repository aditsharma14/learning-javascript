# Switch Statement Example

This folder contains a small JavaScript example demonstrating a `switch` statement used to map a `userType` to a human-friendly `userCategory` value.

Files
- `script.js` — defines `userType` and uses `switch` to set `userCategory`.
- `index.html` — optional HTML wrapper to load `script.js` in a browser.

Behavior
- `userType = "admin"` => `userCategory = "Administrator"`
- `userType = "subscriber"` => `userCategory = "Subscriber"`
- `userType = "guest"` => `userCategory = "Guest User"`
- any other value => `userCategory = "Unknown User"`

Expected output
- The script assigns `userCategory` according to the matching `case`. Add `console.log(userCategory)` to `script.js` to print the result.

How to run
- In a browser: open [switch/index.html](controlflow-conditional-statements/switch/index.html).
- With Node.js (from workspace root):

```bash
node controlflow-conditional-statements/switch/script.js
```

Tips
- Change the value of `userType` in `script.js` to test different branches.
- Use `console.log(userCategory)` or `debugger` to inspect the value when running in a browser.
