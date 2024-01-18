const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
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
    category_id: {
      type: String,
      required: true,
    },
    rates: {
      type: Array,
      default: [],
    },
    discount: {
      type: Object,
      default: {},
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
