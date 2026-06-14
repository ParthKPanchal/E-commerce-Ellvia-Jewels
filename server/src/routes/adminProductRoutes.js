const express = require("express");

const {
  verifyToken,
} = require("../middleware/authMiddleware");

const {
  isAdmin,
} = require("../middleware/adminMiddleware");

const upload = require("../middleware/uploadMiddleware");
const {
  createProduct,
} = require("../controllers/productController");
const router = express.Router();

router.post(
  "/",
  verifyToken,
  isAdmin,
  upload.array("images", 4),
  createProduct
);

module.exports = router;