A fullstack app to simulate SEO metrics for local businesses.

## 📦 Tech Stack

- Frontend: React + Tailwind CSS
- Backend: Node.js + Express

---

## 🔧 Setup Instructions

### 1. Backend (Node.js + Express)

#### If using CommonJS (default)
cd backend
npm install
node index.cjs

Ensure your `index.js` uses `import` instead of `require`:
js
import express from 'express';
import cors from 'cors';


Server runs at: `http://localhost:5000`

Backend code deploy on render.com  
URL link:


2. Frontend (React  + Tailwind CSS)

npm install

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Connect Frontend to Backend
Backend to Render
Push repo to GitHub

Go to Render

Choose Blueprint Deploy 
backend github link : https://github.com/veerababu-g/business-backend


 Then call your API like:

axios.post(`${backendURL}/business-data`, form);
axios.get(`${backendURL}/regenerate-headline?...`);

Frontend 
Go to Vercel
Import same GitHub repo
Set Root Directory: frontend

Features

- Submit business name & location
- Simulated Google rating & reviews
- AI-style SEO headline generation
- Regenerate headline on demand
- Fully responsive dashboard UI

Deployment 

project Link : https://growthproai-project.vercel.app/

Demo Link :https://www.loom.com/share/2efa69b81d834f3e97771933195db655?sid=577145e1-ba82-4bf7-9e41-85651d2572be







