# Speed Typing Analysis

Simple client-side typing test that measures words per minute (WPM).

## Description

- Displays a sample sentence and lets the user type it. When the test is ended it shows words typed, time elapsed, and calculated WPM.

## How to run

- Open `index.html` in your browser (no server required). The main files are:
  - `index.html` — UI markup
  - `script.js` — test logic (start/end, timing and WPM calculation)
  - `style.css` — styles for the UI

## Usage

1. Click **Start Test** to load the sample text and begin timing.
2. Type into the **Your typing** textarea.
3. Click **End Test** to stop and show results.

## Notes

- The script trims and counts words using a whitespace split; very short tests may yield noisy WPM values.
- The UI has a basic layout and focus management; the `startTest()` function enables the typing area and starts the timer.

## Suggestions / Improvements

- Add accuracy scoring (compare typed text to target text).
- Add a live timer and an auto-start when the first key is pressed.
- Persist best scores using `localStorage`.
