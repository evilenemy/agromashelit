const express = require("express");
const {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

const router = express.Router();

// GET ALL
router.get("/", getEvents);

// GET SINGLE
router.get("/:id", getEvent);

// CREATE
router.post("/", createEvent);

// UPDATE
router.put("/:id", updateEvent);

// REMOVE
router.delete("/:id", deleteEvent);

module.exports = router;
