const express = require("express");
const {
  getAllOrders,
  getOrder,
  createOrder,
  deleteOrder,
} = require("../controllers/orderController");
const router = express.Router();

// GET ALL
router.get("/", getAllOrders);

// GET SINGLE
router.get("/:id", getOrder);

// CREATE
router.post("/", createOrder);

// DELETE
router.delete("/:id", deleteOrder);

module.exports = router;
