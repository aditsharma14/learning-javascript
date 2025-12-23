# Book Management System

**Description:**

- **Book Management System:** a minimal client-side app to add, list and edit simple book entries. The UI uses a small HTML form to collect `Book Name`, `Author Name`, `Book Description` and `No. of Pages`, and renders a live list of books below.

**How to run:**

- Open `index.html` in a browser (no server required). The app's JavaScript is in `script.js` and styles are in `style.css`.

**Files:**

- `index.html`: main HTML UI.
- `script.js`: front-end logic (add, show, edit books).
- `style.css`: CSS styling for the form and book list.

**Usage:**

- Fill all fields and click **Add Book**. The book will appear under the **books** heading.
- Click **Edit** on an entry to populate the form with the book's data; the original entry is removed so you can submit an updated version.

**Notes & suggestions:**

- The current edit flow removes the original entry and fills the form. Consider changing to an in-place edit or adding a dedicated "Save" state.
- Persisting data (localStorage) would make the list survive page reloads.
- Wrapping each book's markup in a `.book-card` container (and updating `showbooks()` accordingly) will make styling and layout easier.

**License / Attribution:**

- Public domain for learning purposes; adapt as you like for personal projects.

## Overview

This is a tiny learning project demonstrating basic DOM manipulation and state management in plain JavaScript. It's intentionally simple so you can experiment with UI, validation, and persistence.

## Features

- Add books with name, author, description and page count.
- Live list rendering with a simple edit flow (fills form and removes the original entry).
- Basic input trimming and HTML-escaping to avoid accidental markup injection.

## Quick Development Notes

- To persist data across reloads, add `localStorage` writes when modifying `books` and read them on load.
- To implement in-place editing: add an `editIndex` state and render a `Save` button instead of removing the entry on edit.
- Validation can be improved (min/max pages, required lengths).

## Contact

If you want, I can add `localStorage` persistence or change the edit flow to in-place editing—tell me which and I'll implement it.
