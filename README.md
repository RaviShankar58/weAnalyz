---

# 🛠️ Helpdesk System – Frontend

This is the **frontend** of the Helpdesk Ticketing System built using **React** and **Tailwind CSS**. It supports user sign-up, sign-in, password reset, ticket creation, profile management, and viewing all submitted tickets.

> ✅ Currently frontend-only. Backend integration will follow.

---

## 🚀 Live Demo

👉 https://gilded-buttercream-5e6199.netlify.app/ 

---

## 🧪 Testing Credentials

You can log in using the following test credentials:

```

Username:ravi
Password:1111

```


---

## 🧰 Tech Stack

- **React** (with Create React App)
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Axios** for future API integration
- **Netlify** for hosting

---

## 📁 Project Structure

```

frontend/
├── public/
├── src/
│   ├── components/
│   │   └── Layout.jsx         # Main layout with navigation
│   ├── pages/
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── Dashboard.jsx
│   │   ├── NewTicket.jsx
│   │   ├── MyTickets.jsx
│   │   └── Profile.jsx
│   ├── App.js                 # Main routing setup
│   └── index.js               # ReactDOM entry
├── tailwind.config.js
└── index.css

````

---

## 📦 Installation

```bash
git clone https://github.com/your-username/helpdesk-frontend.git
cd helpdesk-frontend
npm install
````

---

## 🧪 Run Locally

```bash
npm start
```

App will run at `http://localhost:3000`



## 🔐 To Do (Backend)

* Signup/Login with token-based auth
* Role-based dashboard (User / Technical / Admin)
* Secure forgot/reset password logic
* Ticket persistence with MongoDB/PostgreSQL

---

## ✍️ Author

* **Ravi Shankar Kumar Yadav**

---

```

---

Let me know when you want the backend README or want me to generate a `.gitignore` file too.
```
