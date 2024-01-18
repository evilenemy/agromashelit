const express = require("express");
const {
  loginUser,
  signupUser,
  editUserForAdmin,
  editUserForUser,
  getUsers,
  getUser,
  deleteUser,
} = require("../controllers/userController");
const adminAuth = require("../middlewares/adminAuth");
const requireAuth = require("../middlewares/requireAuth");

const router = express.Router();

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

// middleware
router.use(requireAuth);

router.put("/user/:id", editUserForUser);

// middleware
router.use(adminAuth);

// GET ALL
router.get("/", getUsers);

// GET SINGLE
router.get("/:id", getUser);

// UPDATE
router.put("/admin/:id", editUserForAdmin);

// REMOVE
router.delete("/:id", deleteUser);

module.exports = router;
