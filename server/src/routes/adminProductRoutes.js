const express = require("express");
const { verifyToken } = require("../middleware/authMiddleware");
const { isAdmin } = require("../middleware/adminMiddleware");
const upload = require("../middleware/uploadMiddleware");
const {
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const router = express.Router();

router.post(
  "/",
  verifyToken,
  isAdmin,
  upload.array("images", 4),
  createProduct,
);
router.put(
  "/:id",
  verifyToken,
  isAdmin,
  upload.array("images", 4),
  updateProduct,
);
router.delete("/:id", verifyToken, isAdmin, deleteProduct);
module.exports = router;
