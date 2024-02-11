const Slider = require("../models/SliderModel");
const path = require("path");
const fs = require("fs");

const getAllImages = async (_, res) => {
  const images = await Slider.find({}).sort({ createdAt: -1 });
  return res.status(200).json(images);
};

const getImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Slider.findById(id);
    return res.status(200).json(image);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Slider.findById(id);
    fs.rm(path.resolve(__dirname, "..") + image.path, (err) => {
      if (err) return;
    });
    return res.status(200).json(await Slider.findByIdAndDelete(id));
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const createImage = async (req, res) => {
  try {
    if (!req.files.image)
      return res.status(400).json({ error: "No files were uploaded." });
    const image = req.files.image;
    const fileName = `${new Date().getTime()} - ${image.name}`;
    const filePath = `/uploads/slider/${fileName}`;
    const fileSize =
      image.size / 1024 > 1024
        ? `${+(image.size / 1024 / 1024).toFixed(2)}mb`.replace(".", ",")
        : `${+(image.size / 1024).toFixed(2)}kb`.replace(".", ",");
    image.mv(path.resolve(__dirname, "..") + filePath, (err) => {
      if (err) return;
    });
    const image_ = await Slider.create({
      path: filePath,
      size: fileSize,
      name: fileName,
    });
    return res.status(200).json(image_);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllImages,
  getImage,
  createImage,
  deleteImage,
};
