# Nested Loop / Control Flow Example

This example demonstrates nested conditional logic in JavaScript to decide what message to show based on the user's login status and role.

Files

- `script.js` — contains the logic:
  - `isLoggedIn` (boolean) and `Userrole` (string) determine the `userMessage` via a nested `if` statement.
- `index.html` — simple HTML wrapper to load `script.js` in a browser.

Behavior

- If `isLoggedIn` is `true` and `Userrole` is `admin`, the script sets `userMessage` to: `Welcome Admin! You have full access.`
- If `isLoggedIn` is `true` but `Userrole` is not `admin`, the script sets `userMessage` to: `Welcome Guest! You have no access.`
- If `isLoggedIn` is `false`, the script sets `userMessage` to: `Please log in to continue.`

Expected output

- The script assigns `userMessage` based on the conditions; you can inspect it by adding a `console.log(userMessage)` line or opening the page in the browser and checking the console.

How to run

- In a browser: open [nested-loop/index.html](controlflow-conditional-statements/nested-loop/index.html).
- With Node.js:

```bash
node controlflow-conditional-statements/nested-loop/script.js
```

Tips

- Change `isLoggedIn` and `Userrole` in `script.js` to test each branch.
- Add `console.log(userMessage)` to the end of `script.js` if you want immediate console output when running with Node or in the browser console.
