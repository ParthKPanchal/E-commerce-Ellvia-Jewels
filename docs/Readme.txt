# 💎 Ellvia Jewels

Ellvia Jewels is an online jewellery shopping website currently being built from scratch.

The goal of this project is to create a modern and easy-to-use jewellery store where customers can browse products, add items to their cart, create an account, place orders, and make secure payments.

---

## 🚀 Current Progress

### Project Setup

* Created a new GitHub repository
* Started a fresh React + TypeScript project
* Set up Node.js and Express backend
* Connected MySQL database
* Added Git version control

### Frontend

* Basic project structure created
* React Router configured
* Navbar created
* Mobile menu created
* Logo added
* Product listing page created
* Product details page created
* Shopping cart page created

### Cart Features

* Add products to cart
* Remove products from cart
* Quantity management
* Cart total calculation
* Cart item counter in navbar

### Authentication

* Login page created
* Register page created
* User information stored locally
* Logout functionality added

### Backend

* Express server configured
* MySQL database connected
* API structure created
* Contact form API created
* Product API planning started

---

## 🎯 Upcoming Features

* Product management
* Product search
* Product filtering
* User dashboard
* Checkout page
* Razorpay payment integration
* Order management
* Shipping integration
* Admin dashboard
* Product image upload
* Wishlist feature

---

## 🛠 Technologies Used

### Frontend

* React
* TypeScript
* Tailwind CSS
* React Router
* Redux Toolkit

### Backend

* Node.js
* Express.js
* MySQL

### Tools

* Git
* GitHub
* VS Code

---

## 📌 Project Status

Currently under active development.

The foundation of the application has been created and the project is being rebuilt with a cleaner structure, better code organization, and improved scalability.

---

## 👨‍💻 Developer

Parth Panchal

Software Developer | React | Node.js | MySQL

### Backend Rebuilt From Scratch

The backend setup has been restarted with a cleaner structure to make future development easier and more organized.

### Express Server Setup

* Express server created and configured
* CORS enabled for frontend-backend communication
* JSON request handling enabled
* Basic API health check route added

When the server is running, visiting the home route confirms that the backend is working correctly.

### Environment Variables Setup

Project configuration has been moved into environment variables.

This keeps sensitive information such as database credentials separate from the main code and makes deployment easier in the future.

### MySQL Database Connection

* MySQL connection configured
* Database credentials loaded from environment variables
* Connection success and failure messages added
* Database connection exported for future API development

### Project Structure Improvements

A dedicated configuration folder has been created for database-related code.

This makes the project easier to maintain as more features are added.

### Current Status

The backend foundation is now ready.

Next development phase will focus on:

* Product APIs
* User Authentication
* Cart APIs
* Order Management
* Payment Integration
* Admin Features

The project is now entering the stage where real business features will start being connected to the database.

### User Authentication Added

The website can now handle user accounts.

New features include:

* User registration
* User login
* User profile access
* Secure authentication using tokens
* Protected routes for logged-in users

This allows the project to identify users and keep certain pages private.

---

### Product API Created

The backend can now provide product information.

Features added:

* Get all products
* Get a single product by ID
* Product data prepared for frontend integration

This creates the foundation for the shop page and product details page.

---

### Admin Product Management Started

An admin-only product management system has been added.

Features include:

* Admin authorization checks
* Protected admin routes
* Product creation endpoint
* Product image upload support

Only authorized administrators will be able to manage products.

---

### Security Improvements

Authentication middleware has been added to protect sensitive routes.

The system now verifies:

* User login status
* Token validity
* Admin permissions before allowing certain actions

---

### Image Upload System Added

A dedicated upload system has been prepared for product images.

This will allow:

* Product image uploads
* Multiple images per product
* Better product presentation in the store

---

### Backend Structure Improved

The backend is now organized into:

* Controllers
* Routes
* Middleware
* Services
* Database Configuration

This makes the project easier to maintain as more features are added.

---

### Current Status

The project has moved beyond basic setup and now includes the foundation for:

* Authentication
* Product Management
* Admin Features
* Image Uploads

Next development stages are expected to focus on:

* Frontend API integration
* Shopping Cart
* Checkout Flow
* Order Management
* Payment Gateway Integration
* Shipping Integration

### User Authentication System Completed

The project now supports user accounts.

Features added:

* User Registration
* User Login
* Password Encryption for security
* JWT Token Authentication
* User Profile Access

Users can now create an account, log in securely, and access protected areas of the website.

---

### Protected Routes Added

The backend now verifies user identity before allowing access to certain features.

This ensures that only logged-in users can perform actions such as:

* Viewing personal profile information
* Managing shopping cart data
* Accessing protected user features

---

### Shopping Cart API Created

A complete cart management system has been added.

Features include:

* Add products to cart
* View cart items
* Update product quantity
* Remove products from cart

The system also checks whether a product already exists in the cart and updates the quantity automatically.

---

### Security Improvements

Several security measures have been added:

* Passwords are encrypted before being stored
* Authentication tokens are generated during login
* Protected routes verify valid user sessions
* Unauthorized users are prevented from accessing restricted features

---

### Backend Expansion

The backend now contains dedicated modules for:

* Authentication
* Product Management
* Shopping Cart Management
* Admin Features

This makes the project more organized and easier to scale as new features are added.

---

### Current Status

The project now supports the core customer journey:

1. Create Account
2. Login
3. Browse Products
4. Add Products to Cart
5. Manage Cart Items

The next major development phase is expected to focus on:

* Frontend integration with authentication APIs
* Checkout process
* Order management
* Payment gateway integration
* Shipping system integration
* Admin dashboard improvements

Shopping Cart System Expanded

The shopping cart functionality has been improved significantly.

New features include:

Add products to cart
Update product quantity automatically
View all cart items
Remove products from cart
Cart linked to logged-in users

This allows customers to manage their shopping experience more easily.

Order Management System Added

The project now supports order creation.

Features added:

Create orders from cart items
Calculate total order amount automatically
Save order information in the database
Generate order records for future checkout processing

This creates the foundation for the complete purchase flow.

Wishlist Feature Added

Customers can now save products for later.

Features include:

Add products to wishlist
View saved wishlist items
Remove products from wishlist

This improves the shopping experience by allowing users to keep track of products they are interested in.

User-Based Shopping Experience

The shopping features are now connected to user accounts.

This means:

Each user has their own cart
Each user has their own wishlist
Orders are connected to the correct customer account

This makes the application behave more like a real e-commerce platform.

Backend Growth

The backend now includes dedicated systems for:

Authentication
Product Management
Shopping Cart
Wishlist
Orders
Admin Operations

The project structure continues to become more organized and scalable.

Current Status

The customer shopping journey is now much closer to completion:

Register Account
Login
Browse Products
Add Products to Cart
Save Products to Wishlist
Create Orders

Next development stages are expected to focus on:

Checkout Experience
Payment Gateway Integration
Address Management
Shipping Integration
Order Tracking
Admin Dashboard Enhancements

### Product Management System Expanded

The product management system has been improved and connected more closely with the database.

New improvements include:

* Product creation functionality
* Product listing APIs
* Product details retrieval
* Product service layer for cleaner code organization
* Admin product management routes

This makes it easier to manage products as the store grows.

---

### Product Image Uploads Added

A dedicated product image system has now been implemented.

Features include:

* Upload product images
* Store product images on the server
* Connect images directly to products
* Support for multiple jewellery product images

Several jewellery product images have already been added to the project and linked to the catalog.

---

### Wishlist System Added

Customers can now save products for later.

Features include:

* Add items to wishlist
* View wishlist products
* Remove wishlist items

This provides a more complete shopping experience.

---

### Order Management Expanded

The order system has been improved with dedicated order controllers and routes.

Features include:

* Create customer orders
* View order information
* Manage order records
* Separate admin order management functionality

This creates a strong foundation for checkout and payment integration.

---

### Admin Features Improved

Administrative functionality has been separated into dedicated modules.

This allows administrators to:

* Manage products
* Manage orders
* Access protected admin-only features

The project structure is now becoming more scalable and easier to maintain.

---

### Better Project Organization

The backend now uses a more organized structure with:

* Controllers
* Routes
* Middleware
* Services
* Upload management

This makes future development easier and keeps the codebase cleaner.

---

### Current Status

The project now contains the core systems required for a modern e-commerce platform:

* User Authentication
* Product Management
* Product Images
* Shopping Cart
* Wishlist
* Order Management
* Admin Operations

Next development phases are expected to focus on:

* Checkout Experience
* Payment Gateway Integration
* Shipping Integration
* Order Tracking
* Frontend and Backend Feature Integration
