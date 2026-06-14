const express = require("express");

const {
  registerUser,
  loginUser,
  getProfile,
  updateProfile,
  changePassword,
} = require("../controllers/authController");
const { verifyToken } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", verifyToken, getProfile);
router.put(
  "/change-password",
  verifyToken,
  changePassword
);
router.put("/profile", verifyToken, updateProfile);
module.exports = router;
