const express = require("express");
const {
  getAllNews,
  getNew,
  createNews,
  deleteNews,
  updateNews,
  downloadNewsImages,
} = require("../controllers/newsController");
const router = express.Router();

// GET ALL
router.get("/", getAllNews);

// DOWNLOAD IMAGES
router.get("/download", downloadNewsImages);

// GET SINGLE
router.get("/:id", getNew);

// CREATE
router.post("/", createNews);

// UPDATE
router.put("/:id", updateNews);

// DELETE
router.delete("/:id", deleteNews);

module.exports = router;
