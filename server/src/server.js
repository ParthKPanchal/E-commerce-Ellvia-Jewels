const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const productRoutes = require("./routes/productRoutes");
const adminProductRoutes = require("./routes/adminProductRoutes");
const cartRoutes = require("./routes/cartRoutes");
const path = require("path");
require("dotenv").config();

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
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/api/admin/products", adminProductRoutes);
app.use("/api/cart", cartRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
