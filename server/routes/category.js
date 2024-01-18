const express = require('express')
const {getAllCategories, getCategory, createCategory, updateCategory, deleteCategory} = require('../controllers/categoryController')
const router = express.Router()

// GET ALL
router.get("/", getAllCategories)

// GET SINGLE
router.get("/:id", getCategory)

// CREATE
router.post("/", createCategory)

// UPDATE
router.put("/:id", updateCategory)

// DELETE
router.delete("/:id", deleteCategory)

module.exports = router