const express = require('express')
const {getSaveds, addToSaved, removeFromSaved} = require('../controllers/savedController')
const requireAuth = require('../middlewares/requireAuth')

const router = express.Router()

// middleware
router.use(requireAuth)

// GET
router.get("/", getSaveds)

// ADD
router.post("/", addToSaved)

// REMOVE
router.delete("/", removeFromSaved)

module.exports = router