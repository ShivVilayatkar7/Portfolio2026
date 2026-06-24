# Portfolio CMS Website

A modern full-stack portfolio website built using the MERN stack with a complete Admin CMS Dashboard for managing portfolio content, projects, and contact messages.

---

## 🚀 Features

### Portfolio Website

* Modern responsive UI
* Hero Section
* About Section
* Skills Section
* Experience Timeline
* Education Section
* Achievements Section
* Certifications Section
* Resume Section
* Projects Showcase
* Contact Form
* Mobile Responsive Design
* Smooth Animations with Framer Motion

---

### Admin Dashboard

Secure admin panel for managing website content.

#### Authentication

* Admin Login
* Protected Routes
* JWT Authentication

#### Portfolio CMS

Manage:

* Hero Content
* About Section
* Skills
* Experience
* Education
* Achievements
* Certifications
* Resume Link
* Social Media Links

#### Project Management

* Create Project
* Edit Project
* Delete Project
* Upload Project Images
* Cloudinary Integration
* Featured Projects Support

#### Contact Management

* View Contact Messages
* Delete Messages
* Manage User Inquiries

---

## 🛠 Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* Framer Motion
* Lucide React
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* BcryptJS
* Multer
* Cloudinary

### Database

* MongoDB Atlas

### Media Storage

* Cloudinary

---

## 📂 Project Structure

```bash
Portfolio Website
│
├── client
│   ├── src
│   │   ├── admin
│   │   ├── components
│   │   ├── pages
│   │   ├── sections
│   │   ├── routes
│   │   └── services
│
├── server
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── uploads
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 💻 Installation

### Clone Repository

```bash
git clone https://github.com/ShivVilayatkar7/Portfolio2026.git
```

### Install Frontend

```bash
cd client
npm install
npm run dev
```

### Install Backend

```bash
cd server
npm install
npm run dev
```

---

## 🔐 Admin Features

The admin panel allows complete content management without modifying code.

* Update Portfolio Content
* Manage Projects
* Upload Images
* Handle Contact Messages
* Update Resume Links
* Manage Social Links

---

## 🌐 API Modules

### Auth API

* Login

### Portfolio API

* Get Portfolio
* Update Portfolio

### Projects API

* Get Projects
* Create Project
* Update Project
* Delete Project

### Contact API

* Create Message
* Get Messages
* Delete Message

---

## 📸 Image Management

Project images are uploaded directly to Cloudinary and stored in MongoDB.

---

## 🎯 Future Improvements

* Dark / Light Theme Toggle
* Analytics Dashboard
* Message Read Status
* Blog CMS
* Resume Upload Feature
* User Activity Logs

---

## 👨‍💻 Developer

**Shiv Vilayatkar**

Full Stack Developer

* MERN Stack Developer
* Java Developer
* Problem Solver
* Open to Internship Opportunities

---

## 📜 License

This project is developed for educational, portfolio, and professional showcase purposes.
