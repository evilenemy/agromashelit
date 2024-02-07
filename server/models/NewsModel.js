const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      requred: true,
    },
    images: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", newsSchema);
