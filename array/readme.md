# Restaurant Menu Demo

Simple static demo that lists menu items for Breakfast, Main Course, and Dessert using plain JavaScript and CSS.

## Files

- `index.html` — markup and sections for each menu.
- `script.js` — populates the menu items and totals using DOM methods.
- `style.css` — responsive styling for the menu cards and typography.

## How to run

1. Open `index.html` in your browser (double-click or use your editor's "Open in Browser").
2. `script.js` will automatically populate the menu lists and totals.

## Features

- Lightweight — no build tools or dependencies.
- Responsive card layout for each menu section.
- Easy to extend: add items in `script.js` arrays.

## Notes

- Keep the element IDs in the HTML as-is (`breakfastMenuItems`, `maincourseMenuItems`, `dessertMenuItems`, and their `...TotalItems` counterparts) so the script can locate them.
- To change styles, edit `style.css`.

## Next ideas

- Add price fields and calculate totals.
- Make sections collapsible.
- Persist custom menu items to `localStorage`.

## License

This project is MIT-style for learning and experimentation.
