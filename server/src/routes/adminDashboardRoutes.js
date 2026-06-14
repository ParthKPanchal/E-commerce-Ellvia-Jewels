const express = require("express");

const {
  getDashboardStats,
} = require("../controllers/adminDashboardController");

const {
  verifyToken,
} = require("../middleware/authMiddleware");

const {
  isAdmin,
} = require("../middleware/adminMiddleware");

const router = express.Router();

router.get(
  "/",
  verifyToken,
  isAdmin,
  getDashboardStats
);

module.exports = router;