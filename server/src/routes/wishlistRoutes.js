const express = require("express");

const {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} = require("../controllers/wishlistController");

const {
  verifyToken,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/add",
  verifyToken,
  addToWishlist
);

router.get(
  "/",
  verifyToken,
  getWishlist
);

router.delete(
  "/:id",
  verifyToken,
  removeFromWishlist
);

module.exports = router;