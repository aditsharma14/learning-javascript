# Health Articles Web App

This is a simple frontend web application that loads and displays health-related articles from a JSON file using JavaScript and XMLHttpRequest.

## 📁 Project Structure

project-folder/
│
├── index.html
├── script.js
├── style.css
├── health_article.json
└── README.md

## 🧩 Features

- Loads article data from a JSON file
- Displays:
  - Article title
  - Description
  - Ways to achieve
  - Benefits
- Clean and responsive UI
- Error handling for:
  - Missing JSON data
  - Network errors
  - Missing HTML elements

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- JSON

## ▶️ How to Run

1. Make sure all files are in the same folder.
2. Open `index.html` in a browser.

> ⚠️ Note:  
> If the JSON file does not load when opening the file directly, run the project using a local server.

### Example (Using VS Code):

- Install **Live Server**
- Right-click `index.html`
- Select **Open with Live Server**

## 📄 JSON Format Example

````json
{
  "articles": [
    {
      "title": "Healthy Living",
      "description": "Tips for a healthy lifestyle.",
      "ways_to_achieve": [
        "Exercise regularly",
        "Eat balanced meals"
      ],
      "benefits": [
        "Improved energy",
        "Better mental health"
      ]
    }
  ]
}```
✅ Output

The page will display health articles in a card-style layout with headings and bullet points.

📜 License

This project is free to use for learning and personal projects.


---

If you want, I can also:
- Validate your `health_article.json`
- Convert this to `fetch()` API
- Add responsiveness or animations
- Add search or filter functionality
````
