const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sliderSchema = new Schema(
  {
    path: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Slider", sliderSchema);
