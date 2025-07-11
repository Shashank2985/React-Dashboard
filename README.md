# React Dashboard

A modern, responsive, and minimal React Dashboard built with **Vite**, **Tailwind CSS**, and **React Context API** for authentication and global state management.
---

## 🚀 Features

- ⚡️ Built with **Vite** for ultra-fast development
- 🎨 Styled with **Tailwind CSS**
- 🔐 **Authentication Context** with login/logout functionality
- 🧭 Modular layout with **Navbar**, **Sidebar**, and page containers
- 📱 Fully **responsive** design
- 🌙 Light/Dark mode toggle (optional to implement)

---

## 📁 Project Structure

```bash
.
├── public/
├── src/
│   ├── assets/              # Static files & icons
│   ├── components/          # Reusable UI components
│   ├── context/             # Auth and global context providers
│   ├── pages/               # Dashboard pages
│   ├── routes/              # Routing configuration
│   ├── App.jsx              # Root component
│   └── main.jsx             # Entry point
├── index.html
├── tailwind.config.js       # Tailwind CSS config
├── vite.config.js           # Vite config
└── package.json
```
## 🛠️ Tech Stack

- React.js
- Vite
- Tailwind CSS
- Lucide Icons
- React Router
- React Context API

## ⚙️ Getting Started
1. Clone the Repository
```bash
git clone https://github.com/Shashank2985/React-Dashboard.git
cd React-Dashboard
```
2. Install Dependencies
```bash
npm install
```
3. Start the Development Server
```bash
npm run dev
```
4. Build for Production
```bash
npm run build
```

## 🔑 Authentication
Auth is managed using a custom AuthContext
You can integrate with external auth providers (like Firebase, Supabase, Clerk) or your own backend


