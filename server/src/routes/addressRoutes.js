const express = require("express");

const {
  addAddress,
  getAddresses,
  updateAddress,
  deleteAddress,
} = require("../controllers/addressController");

const {
  verifyToken,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/",
  verifyToken,
  addAddress
);

router.get(
  "/",
  verifyToken,
  getAddresses
);

router.put(
  "/:id",
  verifyToken,
  updateAddress
);

router.delete(
  "/:id",
  verifyToken,
  deleteAddress
);

module.exports = router;