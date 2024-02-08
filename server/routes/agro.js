const express = require("express");
const {
  getAllTechnics,
  getTechnic,
  createTechnic,
  updateTechnic,
  deleteTechnic,
  downloadAgroImages,
} = require("../controllers/agroController");
const router = express.Router();

// GET ALL
router.get("/", getAllTechnics);

// DOWNLOAD IMAGES
router.get("/download/:id", downloadAgroImages);

// GET SINGLE
router.get("/:id", getTechnic);

// CREATE
router.post("/", createTechnic);

// UPDATE
router.put("/:id", updateTechnic);

// DELETE
router.delete("/:id", deleteTechnic);

module.exports = router;
