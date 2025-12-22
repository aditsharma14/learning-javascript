# Employee Management — 2-D Array Demo

Lightweight static demo that shows a small employee dataset and several helper functions implemented with plain JavaScript. Intended for learning DOM manipulation, array helpers, and simple UI interactions.

**Files**

- `index.html` — page with control buttons and a container for employee output.
- `script.js` — contains the sample `employees` array and functions: `displayEmployees()`, `calculateTotalSalaries()`, `displayHREmployees()`, `findEmployeeById(id)`.
- `style.css` — polished, responsive styles (UI and table styles).

**How to run**

1. Open `index.html` in your browser.
2. Use the buttons to run the demo functions (Display Employees, Calculate Total Salaries, Display HR Employees, Find Employee by ID 2).

**Behavior / Notes**

- The demo is intentionally simple and requires no build tools.
- The script assumes certain element IDs exist in the DOM:

  - `employeeTableBody` — used by `displayEmployees()` to append table rows (add a `<tbody id="employeeTableBody">` in your table markup if you want table output).
  - `employeesDetails` — used to show simple lists or details (already present in `index.html`).
  - `calculateSalariesBtn` — the script registers a click listener on this id; if your `index.html` uses inline `onclick` handlers instead, the element with this id may be missing and will cause a console error. Either add a button with `id="calculateSalariesBtn"` or remove the listener in `script.js`.

- Currently `index.html` references `./employee_details.js` in the script tag; the provided main script is `script.js`. Make sure the filename in the `<script>` tag matches the actual file.

**Functions (quick reference)**

- `displayEmployees()` — appends rows to `employeeTableBody` for each employee.
- `calculateTotalSalaries()` — computes total salary and shows an alert with the sum.
- `displayHREmployees()` — filters `employees` for department `'HR'` and renders them into `employeesDetails`.
- `findEmployeeById(id)` — finds an employee by `id` and replaces `employeesDetails` with the result.

**Next ideas / improvements**

- Add a proper table in `index.html` with `<thead>` and `<tbody id="employeeTableBody">` to display rows cleanly.
- Replace inline `onclick` attributes with event listeners and a single source of truth for UI wiring.
- Add input to search by arbitrary ID and show a friendly not-found message.
- Add sorting, pagination, or editable rows to practice more DOM work.
