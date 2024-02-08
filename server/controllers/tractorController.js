const Tractor = require("../models/TractorModel");
const path = require("path");
const fs = require("fs");

const getAllTractors = async (_, res) => {
  const tractors = await Tractor.find({}).sort({ createdAt: -1 });

  return res.status(200).json(tractors);
};

const getTractor = async (req, res) => {
  try {
    const { id } = req.params;
    const tractor = await Tractor.findById(id);
    return res.status(200).json(tractor);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const createTractor = async (req, res) => {
  try {
    const { title, description, price } = req.body;
    if (!req.files)
      return res.status(400).json({ error: "No files were uploaded." });

    let uploaded_images = [];
    const images = [];

    if (!Array.isArray(req.files.images)) uploaded_images = [req.files.images];
    else uploaded_images = [...req.files.images];

    for (const image of uploaded_images) {
      const fileName = `${new Date().getTime()} - ${image.name}`;
      const filePath = `\\uploads\\tractors\\${fileName}`;
      const fileSize =
        image.size / 1024 > 1024
          ? `${+(image.size / 1024 / 1024).toFixed(2)}mb`.replace(".", ",")
          : `${+(image.size / 1024).toFixed(2)}kb`.replace(".", ",");
      image.mv(path.resolve(__dirname, "..") + filePath, (err) => {
        if (err) return;
      });
      images.push({ path: filePath, size: fileSize, name: fileName });
    }

    const tractor = await Tractor.create({
      title,
      description,
      price,
      images,
    });

    return res.status(200).json(tractor);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const deleteTractor = async (req, res) => {
  try {
    const { id } = req.params;
    const tractor = await Tractor.findById(id);
    for (const image of tractor.images) {
      fs.rm(path.resolve(__dirname, "..") + image.path, (err) => {
        if (err) return;
      });
    }
    return res.status(200).json(await Tractor.findByIdAndDelete(id));
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const updateTractor = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price } = req.body;

    const tractor = await Tractor.findById(id);
    if (title) tractor.title = title;
    if (description) tractor.description = description;
    if (price) tractor.price = price;

    if (req.files && req.files.images) {
      const uploaded_images = req.files.images;
      let work_images = [];
      const images = [];
      for (const image of tractor.images) {
        fs.rm(path.resolve(__dirname, "..") + image.path, (err) => {
          if (err) return;
        });
      }
      if (!Array.isArray(uploaded_images)) work_images = [uploaded_images];
      else work_images = [...uploaded_images];

      for (const image of work_images) {
        const fileName = `${new Date().getTime()} - ${image.name}`;
        const filePath = `\\uploads\\tractors\\${fileName}`;
        const fileSize =
          image.size / 1024 > 1024
            ? `${+(image.size / 1024 / 1024).toFixed(2)}mb`.replace(".", ",")
            : `${+(image.size / 1024).toFixed(2)}kb`.replace(".", ",");
        image.mv(path.resolve(__dirname, "..") + filePath, (err) => {
          if (err) return;
        });
        images.push({ path: filePath, size: fileSize, name: fileName });
      }
      tractor.images = images;
    }
    tractor.save();
    return res.status(200).json(tractor);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const downloadTractorImages = async (req, res) => {
  try {
    const { id } = req.params;
    const tractor = await Tractor.findById(id);
    return res.status(200).json(tractor.images);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllTractors,
  getTractor,
  createTractor,
  deleteTractor,
  updateTractor,
  downloadTractorImages,
};
