# Imagify - AI-Powered Text-to-Image Generator

Imagify is an **AI SaaS application** that generates images based on text prompts using the **Clipdrop API**. The platform allows users to create high-quality AI-generated images seamlessly. The frontend is built with **React**, styled with **Tailwind CSS**, and includes smooth animations using **Framer Motion**. The backend is powered by **Node.js (Express)** with **MongoDB** as the database and is deployed on **Railway**.

---

## 🚀 Live Links

- **Frontend:** [Imagify Frontend](https://imagify-omega-gilt.vercel.app/)
- **Backend:** [Imagify Backend](https://delightful-caring-production.up.railway.app/)

---

## 🛠 Tech Stack

### Frontend:
- React.js
- Tailwind CSS
- Framer Motion (for animations)
- Axios (for API requests)
- React Router
- React Toastify (for notifications)

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- JWT Authentication
- CORS
- Razorpay (for payments)
- Clipdrop API (for AI image generation)

---

## 🎨 Features
- **Text-to-Image AI Generation** powered by Clipdrop API.
- **Authentication System** using JWT.
- **Animated UI Elements** with Framer Motion.
- **Seamless API Integration** with Axios.
- **Secure Payment Gateway** using Razorpay.
- **Responsive Design** for all screen sizes.

---
### Screenshots
![Home Page](https://github.com/ArushiMishra25/Imagify/blob/main/screenshots/p6.jpg)

![Image Generation](https://github.com/ArushiMishra25/Imagify/blob/main/screenshots/p5.jpg)

![Sign up/Login](https://github.com/ArushiMishra25/Imagify/blob/main/screenshots/p2.jpg)

![prompt](https://github.com/ArushiMishra25/Imagify/blob/main/screenshots/Screenshot%20(2535).png)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/ArushiMishra25/Imagify.git
cd Imagify
```

### 2️⃣ Backend Setup
```bash
cd server
npm install
```

#### Create a `.env` file in the `server` directory with the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIPDROP_API_KEY=your_clipdrop_api_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
FRONTEND_URL=https://imagify-omega-gilt.vercel.app
```

#### Start the backend server:
```bash
npm start
```

### 3️⃣ Frontend Setup
```bash
cd ../client
npm install
```

#### Create a `.env` file in the `client` directory with the following variables:
```env
VITE_BACKEND_URL=https://delightful-caring-production.up.railway.app
```

#### Start the frontend server:
```bash
npm run dev
```

---

## 🔗 API Endpoints

### **User Authentication**
- `POST /api/user/register` → Register a new user.
- `POST /api/user/login` → Login user.
- `GET /api/user/credits` → Fetch user credit balance.
- `POST /api/user/logout` → Logout user.

### **Image Generation**
- `POST /api/image/generate` → Generates an image based on a text prompt.

### **Payments**
- `POST /api/payment/create-order` → Create a Razorpay payment order.
- `POST /api/payment/verify` → Verify Razorpay transaction.

---

## 🖌 Framer Motion Animations
Framer Motion is used in Imagify to enhance user experience with smooth transitions and animations. Some key areas where animations are used:
- **Login Modal:** Animated entry and exit of the login/signup form.
- **Button Clicks:** Smooth hover effects.
- **Image Display:** AI-generated images appear with fade-in and scale effects.

Example Framer Motion implementation:
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.8 }}
  transition={{ duration: 0.3 }}
>
  <h1>Imagify</h1>
</motion.div>
```

---

## 🚀 Deployment
### **Backend Deployment (Railway)**
1. Push changes to GitHub.
2. Link the GitHub repo to **Railway**.
3. Set up environment variables in **Railway Settings**.
4. Deploy and get the backend URL.

### **Frontend Deployment (Vercel)**
1. Push changes to GitHub.
2. Link the GitHub repo to **Vercel**.
3. Set environment variables in **Vercel Settings**.
4. Deploy and access the frontend live link.

---

## 📌 Issues & Debugging
- **CORS Error:** Ensure that `Access-Control-Allow-Origin` is correctly set in the backend for both **localhost** (for development) and **deployed frontend**.
- **Deployment Crashes:** Check Railway logs for MongoDB connection errors or missing environment variables.
- **API Calls Failing:** Verify `VITE_BACKEND_URL` in the frontend `.env` file matches the deployed backend.

---

## 📜 License
This project is open-source and available under the **MIT License**.

---

## ✨ Author
**Arushi Mishra** 🚀
- GitHub: [ArushiMishra25](https://github.com/ArushiMishra25)

