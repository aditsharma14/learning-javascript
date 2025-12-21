
# Events — Feedback Form Example

This small example demonstrates handling DOM events for a feedback form. It shows how to capture user input from form controls, submit the data, and display the submitted information on the page.

## Files

- `index.html` — The feedback form UI: inputs for name, age, email, job, designation, product type select, textarea for feedback, and a submit button.
- `script.js` — JavaScript that handles the submit button click and the Enter key to show a thank-you alert and display the entered information.

## How it works

1. Open `index.html` in your browser.
2. Fill in the form fields and either click the **Submit Feedback** button or press **Enter**.
3. The script shows an alert and reveals the `#userInfo` block populated with the entered values.

## Notes

- The example reads and displays simple form values; it is intended for learning DOM events and basic UI updates.
- Current implementation detail: the script in `script.js` reads input values once when the file loads. That can lead to empty values being displayed if fields are filled after page load. To ensure the latest values are shown, move each `element.value` read inside the `submitFeedback()` function (i.e., fetch values at submit time).

## Quick improvement (recommended)

Replace the top-level value reads like `const username = document.getElementById('name').value;` with fetching inside the function:

```js
const submitFeedback = () => {
	const username = document.getElementById('name').value;
	// ...fetch other values here
	// then update the UI
}
```

This makes the form behave correctly regardless of when the user types their input.

## License

Use freely for learning and experimentation.

