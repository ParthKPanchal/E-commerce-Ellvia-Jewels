const express = require("express");

const {
  createOrder,
  getMyOrders,
  getOrderById,
} = require("../controllers/orderController");

const {
  verifyToken,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/",
  verifyToken,
  createOrder
);

router.get(
  "/",
  verifyToken,
  getMyOrders
);

router.get(
  "/:id",
  verifyToken,
  getOrderById
);

module.exports = router;