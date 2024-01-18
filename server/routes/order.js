const express = require('express')
const {getOrder, addToOrders, removeFromOrders} = require('../controllers/orderController')
const requireAuth = require('../middlewares/requireAuth')

const router = express.Router()

// middleware
router.use(requireAuth)

// GET
router.get("/", getOrder)

// ADD
router.post("/", addToOrders)

// REMOVE
router.delete("/", removeFromOrders)

module.exports = router