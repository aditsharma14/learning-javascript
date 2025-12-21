# Rectangle Area Calculator

Small example showing how to read numeric inputs from the DOM, compute the area of a rectangle, and display the result.

Files
- `index.html` — page with two number inputs (`id="length"`, `id="width"`), a button that calls `calculateArea()`, and an output paragraph with `id="area"`.
- `script.js` — defines `calculateArea()` which reads the inputs, computes `area = length * width`, and sets the text of the `area` element.

Behavior
- Enter numeric values for length and width, then click the "Calculate Area" button. The page will display `The area is <value>` inside the element with `id="area"`.

How to run
- Open [index.html](function/index.html) in a browser and use the form.

Notes
- Inputs are parsed as numbers; non-numeric or empty inputs are treated as 0.
- This script interacts with the DOM and should be opened in a browser (not run directly with Node.js).
- Element IDs used: `length`, `width`, `area`.
