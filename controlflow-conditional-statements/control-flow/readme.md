# Control Flow Example

This folder contains a small JavaScript example demonstrating conditional logic (if / else if / else) to determine a user's access level based on their role.

- **Files:**
  - `script.js` — defines `Userrole` and computes `acceslevel` using conditional statements.
  - `index.html` — (optional) HTML wrapper if you open the example in a browser.

## Overview

`script.js` sets `Userrole` (for example: `admin`, `subadmin`, `user`) and assigns `acceslevel` accordingly:

- `admin` => `full access`
- `subadmin` => `limited access`
- `user` => `access to content`
- any other value => `no access`

## Expected output

Running the script prints a message to the console. With `Userrole = "admin"` the output is:

The user with role admin has full access.

## How to run

- In a browser: open [control-flow/index.html](controlflow-conditional-statements/control-flow/index.html).
- In Node.js (from the workspace root):

```bash
node controlflow-conditional-statements/control-flow/script.js
```

## Notes

- To test different branches, change the value of `Userrole` in `script.js` and re-run.
- The variable names in the example are `Userrole` and `acceslevel` (matching the source file).
