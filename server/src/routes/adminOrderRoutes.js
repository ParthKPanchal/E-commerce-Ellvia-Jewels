const express = require("express");

const {
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/adminOrderController");

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
  getAllOrders
);

router.put(
  "/:id",
  verifyToken,
  isAdmin,
  updateOrderStatus
);

module.exports = router;