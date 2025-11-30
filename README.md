# 📰 RJ News – Real-Time News WebApp

A fast and minimal news application that fetches real-time articles using NewsAPI.  
Built with pure **HTML, CSS, JavaScript** and secured using **Vercel Serverless Functions** to keep the API key completely hidden.

---

## 🚀 Features

- 🔍 Search news by any topic  
- 🗂️ Category-based navigation  
- 📰 Clean card-style UI  
- ⚡ Fast & lightweight (no frameworks)  
- 🔒 API key protected in backend (`/api/news`)  
- 📱 Responsive layout  

---

## 🛠️ Tech Stack

**Frontend**  
- HTML  
- CSS  
- Vanilla JavaScript  

**Backend / Security**  
- Vercel Serverless Function  
- Environment Variables (`process.env.API_KEY`)  

---

## 📂 Folder Structure

project/
│
├── index.html
├── style.css
├── script.js
│
└── api/
└── news.js



## 🔒 API Key Protection

The NewsAPI key is **not exposed** in the browser.  
All requests go through a secure backend route:

GET /api/news?q=yourQuery



The serverless function reads the API key from environment variables:

```js
process.env.API_KEY
This ensures your key is never visible in the frontend code.


🤝 Contributing
Pull requests and feature improvements are welcome.
Feel free to open an issue to discuss enhancements.

📜 License
MIT License — free to use, modify, and distribute.

⭐ Support
If you like the project, consider giving it a star ⭐ on GitHub.

yaml
Copy code
