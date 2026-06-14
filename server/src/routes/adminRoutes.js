const express = require("express");

const {
  verifyToken,
} = require("../middleware/authMiddleware");

const {
  isAdmin,
} = require("../middleware/adminMiddleware");

const router = express.Router();

router.get(
  "/dashboard",
  verifyToken,
  isAdmin,
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Welcome Admin Dashboard",
    });
  }
);

module.exports = router;