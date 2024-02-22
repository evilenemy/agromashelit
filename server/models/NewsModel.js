const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    title_ru: {
      type: String,
      required: false
    },
    description: {
      type: Array,
      required: true,
    },
    description_ru: {
      type: Array,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("News", newsSchema);
