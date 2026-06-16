const express = require("express");
const multer = require("multer");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();
const upload = require("../config/multerConfig");
router.get("/", getAllProducts);
router.get("/:id", getProductById);

router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.post(
  "/",
  upload.array("images", 4),
  createProduct
);
module.exports = router;