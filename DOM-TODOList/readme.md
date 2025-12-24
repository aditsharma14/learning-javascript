# 📝 TODO List Application

A simple and interactive TODO List web application built using **HTML**, **CSS**, and **JavaScript**.  
This app allows users to add tasks, mark them as completed, and clear completed tasks easily.

---

## 🚀 Features

- Add new tasks
- Mark tasks as completed using checkboxes
- Automatically update the task list
- Clear all completed tasks
- Responsive and clean UI

---

## 🛠️ Technologies Used

- **HTML5** – Structure of the application
- **CSS3** – Styling and layout
- **JavaScript (ES6)** – Application logic and DOM manipulation

---

## 📁 Project Structure

├── index.html
├── style.css
├── script.js
└── README.md

---

## 📄 How It Works

1. Enter a task in the input field.
2. Click the **Add Task** button to add it to the list.
3. Use the checkbox to mark a task as completed.
4. Click **Clear Completed** to remove all completed tasks.

---

## ▶️ How to Run the Project

1. Download or clone the repository.
2. Make sure all files are in the same folder.
3. Open `index.html` in any modern web browser.

---

## 🧠 JavaScript Logic Overview

- Tasks are stored in an array as objects:
  ```js
  { text: "Task name", completed: false }
  ```
- The `addTask()` function adds a new task to the array and updates the DOM.
- The `toggleTaskCompletion(index)` function toggles the `completed` status of a task
- The `clearCompletedTasks()` function filters out completed tasks from the array and updates the DOM.
- The `renderTasks()` function updates the task list in the DOM based on the current state of the tasks array.
- Event listeners are set up for the **Add Task** button and **Clear Completed** button to handle user interactions.
- Each task is displayed with a checkbox that, when clicked, calls `toggleTaskCompletion(index)` to update its status.
- The application uses basic DOM manipulation methods like `document.createElement`, `appendChild`, and `innerHTML` to dynamically update the task list.
  ---## 📚 Additional Notes
- The application is designed to be simple and easy to understand, making it a great starting point for learning DOM manipulation with JavaScript.
- You can enhance the application by adding features like task editing, due dates, or local storage persistence.
- The CSS is kept minimal for clarity but can be expanded for better styling and responsiveness.
- Feel free to modify and expand the code to suit your learning needs!

---
