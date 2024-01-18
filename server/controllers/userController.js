const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const path = require("path");
const bcrypt = require("bcrypt");
const fs = require("fs");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_PASSWORD, { expiresIn: "3d" });
};

// login a user
const loginUser = async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.login(login, password);

    // create a token
    const token = createToken(user._id);

    return res.status(200).json({
      token,
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// signup a user
const signupUser = async (req, res) => {
  try {
    const { login, password, email } = req.body;
    let imagepath = "\\uploads\\user\\user.jpeg";
    if (req.files) {
      const img = req.files.image;
      imagepath = imagepath.replace(
        "user.jpeg",
        `${new Date().getTime()} - ${img.name}`
      );
      await img.mv(path.resolve(__dirname, "..") + imagepath, (err) => {
        if (err) return err;
      });
    }
    const user = await User.signup(login, password, email, imagepath);

    // create a token
    const token = createToken(user._id);

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const editUserForUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { login, password, lastPassword, email } = req.body;
    const user = await User.findById(id);
    let imagepath = "\\uploads\\user\\user.jpeg";

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw Error("Incorrect password");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(lastPassword, salt);

    if (req.files) {
      const image = req.files.image;
      (imagepath = imagepath.replace(
        "user.jpeg",
        new Date().getTime() + " - " + image.name
      )),
        image.mv(path.resolve(__dirname, "..") + imagepath, (err) => {
          if (err) throw err;
        });

      if (user.imagePath != "\\uploads\\user\\user.jpeg")
        fs.rm(path.resolve(__dirname, "..") + user.imagePath, (err) => {
          if (err) throw err;
        });
    }

    (user.login = login),
      (user.password = hash),
      (user.email = email),
      (user.imagePath = imagepath);
    user.save();

    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// GET USERS
const getUsers = async (req, res) => {
  const users = await User.find({});

  return res.status(200).json(users);
};

// GET SINGLE
const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  return res.status(200).json(user);
};

const editUserForAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { login, password, email, role } = req.body;

    const user = await User.findById(id);

    const match = (await User.find({ login })) || (await User.find({ email }));

    let imagePath = user.imagePath;

    if ((user.login != login || (email && user.email != email)) && match) {
      throw Error("Login or email already in use");
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    if (req.files) {
      const image = req.files.image;
      imagePath = imagePath.replace(
        "user.jpeg",
        new Date().getTime() + " - " + image.name
      );

      image.mv(path.resolve(__dirname, "..") + imagePath, (err) => err);

      if (user.imagePath != "\\uploads\\user\\user.jpeg") {
        fs.rm(path.resolve(__dirname, "..") + user.imagePath, (err) => {
          if (err) throw err;
        });
      }
    }
    user.login = login;
    user.password = hash;
    if (email) user.email = email;
    user.imagePath = imagePath;
    if (role) user.role = role;

    user.save();

    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (user.imagePath != "\\uploads\\user\\user.jpeg")
      fs.rm(path.resolve(__dirname, "..") + user.imagePath, (err) => err);

    return res.status(200).json(await User.findByIdAndDelete(id));
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  loginUser,
  signupUser,
  getUser,
  getUsers,
  editUserForAdmin,
  editUserForUser,
  deleteUser
};
