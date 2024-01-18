require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const categoryRoute = require("./routes/category");
const productRoute = require("./routes/product");
const userRoute = require("./routes/user");
const savedRoute = require("./routes/saved");
const orderRoute = require("./routes/order");
const eventRoute = require("./routes/event");

const app = express();
const port = process.env.PORT || 8000;

// middlewares
app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use((req, _, next) => {
  console.log(req.method, req.path);
  next();
});
app.use("/uploads", express.static("uploads"));

// manual requests
app.get("/", (_, res) => res.send("Hello!"));

// requests
app.use("/api/category", categoryRoute);
app.use("/api/product", productRoute);
app.use("/api/users", userRoute);
app.use("/api/saved", savedRoute);
app.use("/api/order", orderRoute);
app.use("/api/event", eventRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(port, () =>
      console.log(`connected to db && listening app on port ${port}!`)
    )
  )
  .catch((err) => console.error(err));
