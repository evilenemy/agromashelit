const express = require("express");
const {
  getAllTractors,
  getTractor,
  createTractor,
  deleteTractor,
  updateTractor,
  downloadTractorImages,
} = require("../controllers/tractorController");
const router = express.Router();

// GET ALL
router.get("/", getAllTractors);

// DOWNLOAD IMAGES
router.get("/download/:id", downloadTractorImages);

// GET SINGLE
router.get("/:id", getTractor);

// CREATE
router.post("/", createTractor);

// UPDATE
router.put("/:id", updateTractor);

// DELETE
router.delete("/:id", deleteTractor);

module.exports = router;
