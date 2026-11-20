<div align="center">

# Jevaraat

### Jewellery shopping and gold services in one place

Browse jewellery, manage a cart, book an appointment, or manage the store through a dedicated admin dashboard.

<br />

[**Open the live app →**](https://jevaraat-user.onrender.com)

<br />

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Express](https://img.shields.io/badge/Express-5-111111?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)

</div>

---

## About

Jevaraat is a full-stack jewellery storefront with a separate administration app. Customers can browse product collections and use account, cart, order, and appointment features. Store staff can manage inventory and review customer activity from the protected admin dashboard.

## Features

### Customer storefront

- Browse rings, ladies' rings, necklaces, and gold bars
- Create an account, sign in, and manage a profile
- Add products to a cart and place orders
- Book an appointment and explore gold-related services
- Ask the inventory assistant for product guidance

### Admin dashboard

- Sign in to a protected dashboard
- Create, update, and remove inventory items
- Review appointments, orders, customers, and product collections
- Upload product images

## Project layout

```text
Jevaraat/
├── adminfrontend/   # Store administration app (React + Vite)
├── backend/         # REST API (Express + MongoDB)
├── userfrontend/    # Customer storefront (React + Vite)
└── render.yaml      # Static frontend rewrite configuration
```

## Tech stack

| Area | Technologies |
| --- | --- |
| Customer and admin apps | React, Vite, React Router, Axios |
| API | Node.js, Express, CORS, Multer |
| Data and authentication | MongoDB, Mongoose, JWT, bcrypt |
| AI assistant | Gemini API (optional) |

## Run locally

You need Node.js, npm, and a running MongoDB instance.

### 1. Configure and start the backend

Create `backend/.env` with your local settings:

```env
MONGO_URI=mongodb://127.0.0.1:27017/jevaraat
JWT_SECRET=replace-with-a-long-random-secret
PORT=2000
CORS_ORIGINS=http://localhost:5173,http://127.0.0.1:5173,http://localhost:5174,http://127.0.0.1:5174

# Optional: enables the inventory assistant
GEMINI_API_KEY=
GEMINI_MODEL=gemini-2.5-flash
```

Then run:

```bash
cd backend
npm install
npm run dev
```

### 2. Start the customer app

In a second terminal:

```bash
cd userfrontend
npm install
npm run dev
```

### 3. Start the admin app

In another terminal:

```bash
cd adminfrontend
npm install
npm run dev
```

Both frontend apps define `API_BASE_URL` in their `src/App.jsx`. To use the local backend, set it to `http://localhost:2000`; for the hosted API, set it to the deployed backend URL.

## Build the frontends

Run from either frontend directory:

```bash
npm run build
```

## Deployment note

Both frontends use client-side routes. The root `render.yaml` includes a rewrite from `/*` to `/index.html`, so refreshing a nested route such as `/Cart` or `/Inventory` loads the app instead of a 404. Add the same rewrite to each static hosting service if it is configured outside the blueprint.

---

<div align="center">

Made for jewellery shopping and store management · [Live app](https://jevaraat-user.onrender.com)

</div>
