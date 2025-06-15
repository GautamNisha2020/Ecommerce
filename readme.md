# Fashion E-commerce Website 👗✨

A full-stack e-commerce fashion website built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring a customer frontend, admin panel, and robust backend API.

## 🚀 Live Demo

- **Customer Website**: [https://fashio-collection.vercel.app/](https://fashio-collection.vercel.app/)
- **Admin Panel**: [https://fashio-admin.vercel.app/](https://fashio-admin.vercel.app/)
- **API Backend**: [https://ecommerce-b4ax.onrender.com/](https://ecommerce-b4ax.onrender.com/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Customer Frontend
- 🛍️ Browse fashion products by categories
- 🛒 Shopping cart functionality
- 👤 User authentication (register/login)
- 📱 Responsive design for all devices
- 💳 Secure payment integration
- 📦 Order tracking
- ⭐ Product reviews and ratings

### Admin Panel
- 🏷️ Product management (CRUD operations)
- 📋 Order management
- 🎨 Category management
- 🖼️ Image upload functionality

### Backend API
- 🔐 JWT authentication
- 🛡️ Role-based authorization
- 📝 RESTful API design
- 🗄️ MongoDB database integration
- 🔒 Password hashing
- 📱 File upload handling

## 🛠️ Tech Stack

**Frontend:**
- React.js 18+
- React Router DOM
- ContextAPI (State Management)
- Tailwind CSS / Material-UI
- Axios (HTTP Client)

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Tokens)
- Bcrypt.js
- Multer (File Upload)

**Admin Panel:**
- React.js

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- Git

### Clone the Repository
```bash
git clone https://github.com/GautamNisha2020/Ecommerce
cd Ecommerce
```

### Backend Setup
```bash
cd backend
npm install
# Configure your environment variables
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Admin Panel Setup
```bash
cd admin
npm install
npm start
```

## 🔧 Environment Variables

Create `.env` files in the respective directories:

### Backend (.env)
```env
MONGODB_URI=your_mongodb_link
JWT_SECRET=your_jwt_secret_key

# Email Configuration
ADMIN_EMAIL=your_email@gmail.com
ADMIN_PASSWORD=your_app_password

# Payment Gateway (Stripe)
STRIPE_SECRET_KEY=your_stripe_secret_key

# Cloudinary (for image uploads)
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

#Razorpay
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_SECRET_KEY=your_razorpay_secret_key
```

### Frontend (.env)
```env
VITE_BACKEND_URL=your_backend_url
VITE_ADMIN_URL=your_admin_url
```

### Admin (.env)
```env
VITE_BACKEND_URL=your_backend_url
```

## 💻 Usage

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Server runs on `http://localhost:4000`

2. **Start the Frontend**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

3. **Start the Admin Panel**
   ```bash
   cd admin
   npm run dev
   ```
   Admin panel runs on `http://localhost:5174`

## 🛒 Key Features Implementation

### Shopping Cart
- Persistent cart using localStorage
- Real-time cart updates
- Quantity management
- Price calculations

### Payment Integration
- Stripe payment gateway
- Secure payment processing
- Order confirmation emails

### Image Upload
- Multiple image upload for products
- Image optimization
- Cloudinary integration

### Search & Filter
- Category filtering
- Price range filtering
- Sort by price, date, popularity

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔒 Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected routes
- Input validation and sanitization
- CORS configuration
- Rate limiting

## 📊 Admin Dashboard Features

- Product inventory management
- Order status tracking
- Category management


## 👨‍💻 Author

**Your Name**
- GitHub: [@GautamNisha2020](https://github.com/GautamNisha2020)


⭐ If you found this project helpful, please give it a star on GitHub!

**Happy Coding! 🚀**