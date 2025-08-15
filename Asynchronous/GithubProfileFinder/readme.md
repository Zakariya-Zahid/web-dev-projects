# 🐱 GitHub Profile Finder

A simple **GitHub Profile Finder** built with **Vanilla JavaScript** that allows users to search for any GitHub username and display their profile information.

---

## 🚀 Features

- Search for any GitHub username
- Displays the following profile details:
  - Profile avatar
  - Name
  - Bio
  - Public repository count
  - Followers and following
  - GitHub profile link
- Error handling for invalid usernames or network issues

---

## 🛠 Technologies Used

- **HTML5**
- **CSS3**
- **Vanilla JavaScript (ES6)**
- **GitHub REST API** ([https://api.github.com/](https://api.github.com/))

---

## 📂 Project Structure

GithubProfileFinder/<br>
├── index.html # Main HTML file<br>
├── script.js # JavaScript logic<br>
└── README.md # This documentation<br>


---

## 🌐 How It Works

1. **Search User**
   - Enter a GitHub username in the input field
   - Click the **Search** button
   - Fetches user data from GitHub API

2. **Display User Data**
   - Shows profile **avatar**, **name**, **bio**, **repo count**, **followers**, **following**, and **GitHub profile link**
   - If some information is missing, a fallback value (e.g., "No Bio Available") is displayed

3. **Error Handling**
   - Invalid usernames or network errors trigger an error message
   - Hides the profile card and shows the error message

---

## ⚡ How to Run Locally

1. Open the `index.html` file in your browser  
2. Make sure you are connected to the internet to fetch data from GitHub API

---
## 📸 Preview

![alt text](image.png)

---

## 📌 Notes

- Works entirely on the client-side, no backend required
- Utilizes GitHub’s free public API
- Profile information updates dynamically based on user input

---

## 📧 Contact

Created by **Zakryia Bukhari**  
Feel free to suggest improvements or report issues!
