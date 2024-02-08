require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const tractorRoute = require("./routes/tractor");
const agroRoute = require("./routes/agro");
const newsRoute = require("./routes/news");
const orderRoute = require("./routes/order");
const sliderRoute = require("./routes/slider");

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

app.use("/api/tractor", tractorRoute);
app.use("/api/agro", agroRoute);
app.use("/api/news", newsRoute);
app.use("/api/order", orderRoute);
app.use("/api/slider", sliderRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(port, () =>
      console.log(`connected to db && listening app on port ${port}!`)
    )
  )
  .catch((err) => console.error(err));
