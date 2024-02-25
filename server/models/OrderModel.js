const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    product: {
      type: Object,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
