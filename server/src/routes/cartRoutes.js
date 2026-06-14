const express = require("express");

const {
  addToCart,
  getCart,
  updateCart,
  deleteCartItem,
} = require("../controllers/cartController");

const {
  verifyToken,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/add",
  verifyToken,
  addToCart
);

router.get(
  "/",
  verifyToken,
  getCart
);

router.put(
  "/:id",
  verifyToken,
  updateCart
);

router.delete(
  "/:id",
  verifyToken,
  deleteCartItem
);

module.exports = router;