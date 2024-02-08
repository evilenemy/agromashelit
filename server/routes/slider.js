const express = require("express");
const {
  createImage,
  deleteImage,
  getAllImages,
  getImage,
} = require("../controllers/sliderController");
const router = express.Router();

// GET ALL
router.get("/", getAllImages);

// GET SINGLE
router.get("/:id", getImage);

// CREATE
router.post("/", createImage);

// DELETE
router.delete("/:id", deleteImage);

module.exports = router;
