const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedSchema = new Schema(
  {
    products: {
      type: Array,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Saved", savedSchema);
