const express = require("express");

const {
  verifyToken,
} = require("../middleware/authMiddleware");

const {
  isAdmin,
} = require("../middleware/adminMiddleware");

const router = express.Router();


module.exports = router;