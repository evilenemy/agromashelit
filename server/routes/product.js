const express = require("express");
const {
  getAllProducts,
  getProductsByTitle,
  getProductByCategory,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct
} = require("../controllers/productController");
const router = express.Router();

// GET ALL
router.get("/", getAllProducts);

// GET BY CATEGORY
router.get("/category/:category_id", getProductByCategory);

// SEARCH
router.get("/search/:query", getProductsByTitle);

// GET SINGLE
router.get("/:id", getProduct);

// CREATE
router.post("/", createProduct);

// DELETE
router.delete("/:id", deleteProduct);

// UPDATE
router.put("/:id", updateProduct)

module.exports = router;
