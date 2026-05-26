
# 📌 Quote Generator App

A simple full-stack Quote Generator application built using:

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js + Express
- Deployment: Coolify (Frontend + Backend)

---

# 🌐 Live Links

## 🖥️ Frontend
http://zw2k9hh5gp6eimuzgef0ec1m.178.105.39.91.sslip.io

## ⚙️ Backend API
http://hajqg60bg4dped2o3qazh6kl.178.105.39.91.sslip.io

---

# 🔗 API Endpoint

### Get Random Quote

```http
GET /quote
````

### Example Response

```json
{
  "text": "Stay hungry, stay foolish.",
  "author": "Steve Jobs"
}
```

---

# 📁 Project Structure

```text
Quote-generator-app/
│
├── Quote-Backend/
│   ├── server.js
│   ├── package.json
│
├── Quote-Frontend/
│   ├── quote.html
│   ├── quote.js
│   ├── quote.css
│
└── README.md
```

---

# 🚀 How It Works

1. User opens the frontend (`quote.html`)
2. User clicks "Get Quote" button
3. Frontend sends request to backend `/quote` API
4. Backend returns a random quote
5. Quote is displayed on the webpage

---

# ⚙️ Backend Setup (Local)

```bash
cd backend
npm install
npm start
```

Server runs on:

[http://localhost:3000](http://localhost:3000)

---

# 🎨 Frontend Setup

Open directly in browser:

```
Quote-Frontend/quote.html
```

OR deploy using Coolify static hosting.

If using coolify static hosting, make sure to change the name of the file from index.html to quote.html in custom Nginx Configuration. Also, you can replace any front-end file name with the configuration as below by replacing just the HTML file name with your own HTML file name.
```
index quote.html index.htm;
try_files $uri $uri.html $uri/quote.html $uri/index.htm $uri/ =404;
```

---

# 🔧 Important Notes

* Frontend uses `quote.js` to fetch backend API
* Backend must have CORS enabled:

```javascript
app.use(cors());
```

* Make sure frontend fetch URL points to deployed backend:

```javascript
fetch("http://hajqg60bg4dped2o3qazh6kl.178.105.39.91.sslip.io/quote")
```

---

# ✨ Features

* Random quote generator
* REST API backend using Express
* Fully deployed frontend + backend
* Real-time API communication

---

## 🧰 Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Deployment: Coolify
- API: REST

# 📌 Author

Diksha0897
