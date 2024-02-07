const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tractorSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tractor", tractorSchema);
