const Agro = require("../models/AgroModel");
const path = require("path");
const fs = require("fs");

const getAllTechnics = async (_, res) => {
  const agro = await Agro.find({}).sort({ createdAt: -1 });

  return res.status(200).json(agro);
};

const getTechnic = async (req, res) => {
  try {
    const { id } = req.params;
    const agro = await Agro.findById(id);
    return res.status(200).json(agro);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const createTechnic = async (req, res) => {
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
      const filePath = `\\uploads\\agrotechnics\\${fileName}`;
      const fileSize =
        image.size / 1024 > 1024
          ? `${+(image.size / 1024 / 1024).toFixed(2)}mb`.replace(".", ",")
          : `${+(image.size / 1024).toFixed(2)}kb`.replace(".", ",");
      image.mv(path.resolve(__dirname, "..") + filePath, (err) => {
        if (err) return;
      });
      images.push({ path: filePath, size: fileSize, name: fileName });
    }

    const agro = await Agro.create({
      title,
      description,
      price,
      images,
    });

    return res.status(200).json(agro);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const deleteTechnic = async (req, res) => {
  try {
    const { id } = req.params;
    const agro = await Agro.findById(id);
    for (const image of agro.images) {
      fs.rm(path.resolve(__dirname, "..") + image.path, (err) => {
        if (err) return;
      });
    }
    return res.status(200).json(await Agro.findByIdAndDelete(id));
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const updateTechnic = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price } = req.body;

    const agro = await Agro.findById(id);
    if (title) agro.title = title;
    if (description) agro.description = description;
    if (price) agro.price = price;

    if (req.files.images) {
      const uploaded_images = req.files.images;
      let work_images = [];
      const images = [];
      for (const image of agro.images) {
        fs.rm(path.resolve(__dirname, "..") + image.path, (err) => {
          if (err) return;
        });
      }
      if (!Array.isArray(uploaded_images)) work_images = [uploaded_images];
      else work_images = [...uploaded_images];

      for (const image of work_images) {
        const fileName = `${new Date().getTime()} - ${image.name}`;
        const filePath = `\\uploads\\agrotechnics\\${fileName}`;
        const fileSize =
          image.size / 1024 > 1024
            ? `${+(image.size / 1024 / 1024).toFixed(2)}mb`.replace(".", ",")
            : `${+(image.size / 1024).toFixed(2)}kb`.replace(".", ",");
        image.mv(path.resolve(__dirname, "..") + filePath, (err) => {
          if (err) return;
        });
        images.push({ path: filePath, size: fileSize, name: fileName });
      }
      agro.images = images;
    }
    agro.save();
    return res.status(200).json(agro);
  } catch (err) {
    return res.status(400).jsoon({ error: err.message });
  }
};

const downloadAgroImages = async (req, res) => {
  try {
    const { id } = req.params;
    const agro = await Agro.findById(id);
    return res.status(200).json(agro.images);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllTechnics,
  getTechnic,
  createTechnic,
  updateTechnic,
  deleteTechnic,
  downloadAgroImages,
};
