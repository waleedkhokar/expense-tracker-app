<div align="center">

# 💰 Expense-Tracker

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&duration=3000&pause=1000&color=00C896&center=true&vCenter=true&width=700&lines=Personal+%26+Shared+Expense+Tracker;Built+with+React+Native+%2B+Expo;Node.js+%2B+Express+Backend;Serverless+PostgreSQL+%2B+Upstash+Redis" />

</div>

# 💰 ExpenseFlow — Personal & Shared Expense Tracker

**A modern full-stack mobile expense tracking app — track spending, visualize finances, and manage money on the go.**

![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![NeonDB](https://img.shields.io/badge/NeonDB-00E599?style=for-the-badge&logo=postgresql&logoColor=white)
![Upstash](https://img.shields.io/badge/Upstash-00E9A3?style=for-the-badge&logo=redis&logoColor=white)

---
<div align="center">

# 💰 ExpenseFlow

<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&duration=3000&pause=1000&color=00C896&center=true&vCenter=true&width=700&lines=Personal+%26+Shared+Expense+Tracker;Built+with+React+Native+%2B+Expo;Node.js+%2B+Express+Backend;Serverless+PostgreSQL+%2B+Upstash+Redis" />

</div>


## 🚀 Project Overview

**ExpenseFlow** is a cross-platform mobile expense tracker built with **React Native (Expo)** and a **Node.js + Express** backend. It lets users log income and expenses, categorize spending, and view real-time financial summaries — all from a clean, mobile-first UI.

The app handles the full money-management flow: secure sign-in, adding transactions with categories, live balance tracking, and transaction history — backed by a **serverless PostgreSQL database (NeonDB)** and protected with **rate limiting via Upstash Redis**.

**What users can do:**

- 🔐 Sign up & sign in securely
- 💵 Add income & expense transactions
- 🏷️ Categorize spending (Food, Shopping, Bills, Transport…)
- 📊 View live balance, income, and expense summary
- 🗑️ Delete transactions
- 📱 Works on Android & iOS

## 📸 Screenshots

| Sign In | Home — Balance & Summary | Add Expense |
| :---: | :---: | :---: |
| ![Sign In](mobile/images/1.jpeg) | ![Home](mobile/images/2.jpeg) | ![Add](mobile/images/3.jpeg) |

| Income | Expense Purpose | Rejister|
| :---: | :---: | :---: |
| ![List](mobile/images/4.jpeg) | ![Details](mobile/images/5.jpeg) | ![More](mobile/images/6.jpeg) |


## 🛠 Tech Stack & Engineering Skills Applied

### Mobile & Frontend Engineering
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Expo Router](https://img.shields.io/badge/Expo_Router-000020?style=for-the-badge&logo=expo&logoColor=white)

- **Framework:** React Native with Expo (SDK 54)
- **Navigation:** Expo Router (file-based routing)
- **State & Data:** Custom React hooks (`useTransactions`)
- **UI:** Custom reusable components (`BalanceCard`, `TransactionItem`, `PageLoader`)
- **Storage:** AsyncStorage for local session
- **Icons:** `@expo/vector-icons` (Ionicons)
- **Charts:** (planned) `react-native-chart-kit`

### Backend, Services & Integrations
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![NeonDB](https://img.shields.io/badge/NeonDB-00E599?style=for-the-badge&logo=postgresql&logoColor=white)
![Upstash](https://img.shields.io/badge/Upstash-00E9A3?style=for-the-badge&logo=redis&logoColor=white)

- **Backend:** Node.js + Express.js REST API
- **Database:** Serverless PostgreSQL via **NeonDB** (`@neondatabase/serverless`)
- **Rate Limiting:** **Upstash Redis** + `@upstash/ratelimit`
- **Scheduled Tasks:** `cron` job to keep the server awake (free-tier hosts)
- **Security:** Middleware-based rate limiting, environment-based config
- **Auth (planned):** Clerk (`@clerk/clerk-expo`) — for production builds

---

## 📁 Project Structure

```text
Expense-Tracker-App-/
├── backend/                      # Node.js + Express REST API
│   ├── src/
│   │   ├── config/               # DB, cron, Upstash configs
│   │   ├── controllers/          # Route logic
│   │   ├── middleware/           # Rate limiter, security
│   │   ├── routes/               # API route definitions
│   │   └── server.js             # Entry point
│   └── package.json
│
├── mobile/                       # React Native (Expo) app
│   ├── app/                      # Expo Router screens
│   │   ├── (auth)/               # sign-in, sign-up
│   │   └── (root)/               # home, create
│   ├── components/               # Reusable UI components
│   ├── hooks/                    # Custom React hooks
│   ├── lib/                      # Utilities (fakeAuth, etc.)
│   ├── constants/                # API URL, colors
│   ├── assets/                   # Images, styles
│   └── package.json
│
└── README.md
```

---

## 🚀 Quick Start & Installation

### Prerequisites

- **Node.js** (v16+)
- **npm**
- **Expo Go** app on your Android/iOS device
- **NeonDB** account (free) → https://neon.tech
- **Upstash** account (free) → https://upstash.com

### 1. Clone the Repository

```bash
git clone https://github.com/waleedkhokar/expenseflow.git
cd Expense Tracker
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=your_neondb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_token
API_URL=http://localhost:3000/api/health
```

Start the backend:

```bash
npm run dev
```

### 3. Mobile App Setup

```bash
cd ../mobile
npm install
npx expo start
```

Scan the QR code with **Expo Go** on your phone.

> ⚠️ **Important:** Update `mobile/constants/api.js` with your Mac/PC's LAN IP:
> ```js
> export const API_URL = "http://YOUR_LOCAL_IP:3000/api";
> ```

## 🎯 Roadmap

- [x] REST API with transactions
- [x] Rate limiting with Upstash
- [x] Mobile UI with Expo Router
- [x] Balance & summary card
- [ ] Clerk authentication (production)
- [ ] 📊 Charts & spending analytics
- [ ] 👥 Shared expenses
- [ ] 📅 Monthly budgets
- [ ] 🔔 Budget alerts
- [ ] 🌙 Dark / Light mode
- [ ] 💵 PKR currency support



## 👨‍💻 Developer

**Waleed Khokhar**

***Full-Stack AI Engineer***

Full-Stack Developer with 1+ year of experience building scalable **web applications** and **mobile apps (Android & iOS)** with AI-powered features. Specializing in intelligent AI solutions using **Generative AI, LLMs, Agentic AI, RAG, and LangChain automation**, alongside proficiency in **Next.js, MERN stack, and Python/FastAPI backends**.

## 🌐 Connect With Me

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://waledkhokar.vercel.app/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/waleedkhokhar)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/waleedkhokar)

</div>

---

## 📄 License

Currently a personal/private portfolio and development project.

---

⭐ **If you liked this project, drop a ⭐ on the repo and share it with others!**
