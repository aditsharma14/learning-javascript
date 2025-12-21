# Control Flow Practice

This example demonstrates conditional `if` / `else if` / `else` logic to display messages based on a user's membership type.

Files

- `app.js` — checks the `user` variable and logs different messages for `Employee`, `Enrolled member`, `Subscribed member`, `Non-subscribed member`, or invalid users.
- `index.html` — simple HTML wrapper that loads `app.js` in a browser.

Behavior

- `user = "Employee"` => logs: `Welcome,you have access to dietary services`
- `user = "Enrolled member"` => logs: `Welcome,you have access to dietary services and one to one interaction with dietitian`
- `user = "Subscribed member"` => logs: `Welcome,you have access to partial dietary services`
- `user = "Non-subscribed member"` => logs: `Welcome,you have to take a plan`
- any other value => logs: `Invalid user`

How to run

- In a browser: open [index.html](controlflow-conditional-statements/practice/index.html).
- With Node.js (from the workspace root):

```bash
node controlflow-conditional-statements/practice/app.js
```

Tips

- Change the `user` value in `app.js` to exercise each branch.
- Add `console.log` statements or breakpoints for debugging.
