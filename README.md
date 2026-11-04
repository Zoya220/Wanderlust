# 🌍 Wanderlust — Vacation Rentals & Stays

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen.svg)](https://www.mongodb.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-v5.3-purple.svg)](https://getbootstrap.com/)

Wanderlust is a full-stack web application for discovering, listing, and reviewing vacation properties around the globe. Built following the **MVC (Model-View-Controller)** architecture using the MERN stack paradigm with EJS templating, it features interactive Mapbox geolocation mapping, Cloudinary media handling, Passport.js authentication, and dynamic tax filtering.

---

## 📸 Preview

![Wanderlust Home Page](<img width="1887" height="856" alt="image" src="https://github.com/user-attachments/assets/c7d746ed-0a5d-480c-8910-4ba6b869703c" />
)
*Explore listing destinations with dynamic filter categories and tax calculation toggle.*

---

## ✨ Features

- 🏡 **Listing Management**: Complete CRUD operations for property hosts (create, view, edit, and delete listings).
- 🗺️ **Interactive Geolocation & Maps**: Automatic forward geocoding via **Mapbox SDK** to render location pins and interactive popups on individual listing pages.
- 🖼️ **Cloud Storage**: Seamless image upload and thumbnail transformation powered by **Cloudinary** and **Multer**.
- 🔒 **Authentication & Authorization**: Secure user signup, login, and session persistence using **Passport.js** and **Passport-Local**.
- ⭐ **Reviews & Star Ratings**: Interactive review system utilizing **Starability.css** for star ratings and custom comments.
- 🏷️ **Category Filters & Dynamic Tax Switch**: Horizontally scrollable property filter bar with smooth control buttons and an interactive toggle to calculate 18% GST display totals.
- 🛡️ **Validation & Error Handling**: Server-side schema validation using **Joi** paired with custom Express error-handling middleware.
- 💾 **Persistent Session Store**: MongoDB-backed session storage powered by **connect-mongo**.

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas, Mongoose ODM
- **Frontend**: EJS, EJS-Mate, Bootstrap 5, FontAwesome, Custom CSS
- **Authentication**: Passport.js, Passport-Local
- **APIs & Services**: Mapbox SDK (Geocoding & Maps API), Cloudinary API (Media Storage)
- **Validation**: Joi
- **Session Management**: express-session, connect-mongo, connect-flash

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your system.

### 1. Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.0 or higher)
- [Git](https://git-scm.com/)
- A **MongoDB Atlas** account (or local MongoDB server)
- A **Cloudinary** account
- A **Mapbox** developer account

---

### 2. Installation

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/Zoya220/Wanderlust.git](https://github.com/Zoya220/Wanderlust.git)
   cd Wanderlust
