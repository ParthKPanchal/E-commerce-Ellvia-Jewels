const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const productRoutes = require("./routes/productRoutes");
const adminProductRoutes = require("./routes/adminProductRoutes");
const cartRoutes = require("./routes/cartRoutes");
const addressRoutes = require("./routes/addressRoutes");
const orderRoutes = require("./routes/orderRoutes");
const path = require("path");
const adminOrderRoutes = require("./routes/adminOrderRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const adminDashboardRoutes = require("./routes/adminDashboardRoutes");
require("dotenv").config();
const contactRoutes = require("./routes/contactRoutes");
const db = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Ellvia Jewels V2 Backend Running");
});
app.use("/uploads/products", express.static("uploads/products"));
app.use("/api/admin/products", adminProductRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin/orders", adminOrderRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/admin/dashboard", adminDashboardRoutes);
app.use("/api/contact", contactRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
