const News = require("../models/NewsModel");
const path = require("path");
const fs = require("fs");

const getAllNews = async (_, res) => {
  const news = await News.find({}).sort({ createdAt: -1 });

  return res.status(200).json(news);
};

const getNew = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findById(id);
    return res.status(200).json(news);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const createNews = async (req, res) => {
  try {
    const { title, title_ru, description, description_ru } = req.body;
    if (!req.files)
      return res.status(400).json({ error: "No files were uploaded." });

    let uploaded_images = [];
    const images = [];

    if (!Array.isArray(req.files.images)) uploaded_images = [req.files.images];
    else uploaded_images = [...req.files.images];

    for (const image of uploaded_images) {
      const fileName = `${new Date().getTime()} - ${image.name}`;
      const filePath = `/uploads/news/${fileName}`;
      const fileSize =
        image.size / 1024 > 1024
          ? `${+(image.size / 1024 / 1024).toFixed(2)}mb`.replace(".", ",")
          : `${+(image.size / 1024).toFixed(2)}kb`.replace(".", ",");
      image.mv(path.resolve(__dirname, "..") + filePath, (err) => {
        if (err) return;
      });
      images.push({ path: filePath, size: fileSize, name: fileName });
    }

    const news = await News.create({
      title,
      title_ru,
      description,
      description_ru,
      images,
    });

    return res.status(200).json(news);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findById(id);
    for (const image of news.images) {
      fs.rm(path.resolve(__dirname, "..") + image.path, (err) => {
        if (err) return;
      });
    }
    return res.status(200).json(await News.findByIdAndDelete(id));
  } catch (err) {
    return res.statu(400).json({ error: err.message });
  }
};

const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, title_ru, description, description_ru, price } = req.body;

    const news = await News.findById(id);
    if (title) news.title = title;
    if (title_ru) news.title_ru = title_ru;
    if (description) news.description = description;
    if (description_ru) news.description_ru = description_ru;
    if (price) news.price = price;

    if (req.files && req.files.images) {
      const uploaded_images = req.files.images;
      let work_images = [];
      const images = [];
      for (const image of news.images) {
        fs.rm(path.resolve(__dirname, "..") + image.path, (err) => {
          if (err) return;
        });
      }
      if (!Array.isArray(uploaded_images)) work_images = [uploaded_images];
      else work_images = [...uploaded_images];

      for (const image of work_images) {
        const fileName = `${new Date().getTime()} - ${image.name}`;
        const filePath = `/uploads/news/${fileName}`;
        const fileSize =
          image.size / 1024 > 1024
            ? `${+(image.size / 1024 / 1024).toFixed(2)}mb`.replace(".", ",")
            : `${+(image.size / 1024).toFixed(2)}kb`.replace(".", ",");
        image.mv(path.resolve(__dirname, "..") + filePath, (err) => {
          if (err) return;
        });
        images.push({ path: filePath, size: fileSize, name: fileName });
      }
      news.images = images;
    }
    news.save();
    return res.status(200).json(news);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const downloadNewsImages = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await News.findById(id);
    return res.status(200).json(news.images);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllNews,
  getNew,
  createNews,
  updateNews,
  deleteNews,
  downloadNewsImages,
};
