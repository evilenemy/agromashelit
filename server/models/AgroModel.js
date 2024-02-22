const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const agroSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    title_ru: {
      type: String,
      required: false,
    },
    description: {
      type: Array,
      required: true,
    },
    description_ru: {
      type: Array,
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

module.exports = mongoose.model("Agro", agroSchema);
