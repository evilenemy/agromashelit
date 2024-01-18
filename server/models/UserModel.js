const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user"
  },
  imagePath: {
    type: String,
    default: "//uploads//user//user.jpeg"
  }
});

// static signup method
userSchema.statics.signup = async function (login, password, email, imagePath) {
  if (!login || !password) {
    throw Error("All fields must be filled");
  }

  const exists =
    (await this.findOne({ email })) || (await this.findOne({ login }));
  let user;

  if (exists) {
    throw Error("Email or login already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  user = await this.create({
    login: login.split(" | ")[0],
    password: hash,
    email: email ? email : null,
    role:
      login.split(" | ")[1] &&
      login.split(" | ")[1] === process.env.SECRET_PASSWORD
        ? "admin"
        : "user",
    imagePath
  });

  return user;
};

// static login method
userSchema.statics.login = async function (login, password) {
  if (!login || !password) {
    throw Error("All fields must be filled");
  }

  const user =
    (await this.findOne({ login })) || (await this.findOne({ email: login }));
  if (!user) {
    throw Error("User not found");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
