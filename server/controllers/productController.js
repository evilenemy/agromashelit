const Product = require("../models/ProductModel");
const path = require("path");
const fs = require("fs");

const getAllProducts = async (_, res) => {
  const products = await Product.find({}).sort({ updatedAt: -1 });

  return res.status(200).json(products);
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res.status(200).json(product);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const getProductByCategory = async (req, res) => {
  try {
    const { category_id } = req.params;
    const products = await Product.find({ category_id: String(category_id) });
    return res.status(200).json(products);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const getProductsByTitle = async (req, res) => {
  try {
    const { query } = req.params;
    const products = await Product.find({ title: { $regex: `.*${query}.*` } });
    return res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { title, description, price, category_id } = req.body;
    if (!req.files) {
      return res.status(400).json({ error: "No files were uploaded." });
    }

    let uploaded_images = [];
    const images = [];

    if (!Array.isArray(req.files.images)) uploaded_images = [req.files.images];
    else uploaded_images = [...req.files.images];

    for (const image of uploaded_images) {
      const filePath = `\\uploads\\images\\${new Date().getTime()} - ${
        image.name
      }`;
      const fileSize =
        image.size / 1024 > 1024
          ? `${+(image.size / 1024 / 1024).toFixed(2)}mb`.replace(".", ",")
          : `${+(image.size / 1024).toFixed(2)}kb`.replace(".", ",");
      image.mv(path.resolve(__dirname, "..") + filePath, (err) => {
        if (err) return;
      });
      images.push({ path: filePath, size: fileSize });
    }
    const product = await Product.create({
      title,
      description,
      price,
      images,
      category_id,
    });

    return res.status(200).json(product);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, category_id } = req.body;
    const uploaded_images = req.files.images;
    let work_images = [];
    let images = [];

    const product = await Product.findById(id);
    for (const image of product.images) {
      fs.rm(path.resolve(__dirname, "..") + image.path, (err) => {
        if (err) return;
      });
    }
    product.title = title;
    product.description = description;
    product.price = price;
    product.category_id = category_id;

    if (!Array.isArray(uploaded_images)) work_images = [uploaded_images];
    else work_images = [...uploaded_images];

    for (const image of uploaded_images) {
      const filePath = `\\uploads\\images\\${new Date().getTime()} - ${
        image.name
      }`;
      const fileSize =
        image.size / 1024 > 1024
          ? `${+(image.size / 1024 / 1024).toFixed(2)}mb`.replace(".", ",")
          : `${+(image.size / 1024).toFixed(2)}kb`.replace(".", ",");
      image.mv(path.resolve(__dirname, "..") + filePath, (err) => {
        if (err) return;
      });
      images.push({ path: filePath, size: fileSize });
    }

    product.images = images;
    product.save();

    return res.status(200).json(product);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    for (const image of product.images) {
      fs.rm(path.resolve(__dirname, "..") + image.path, (err) => {
        if (err) return;
      });
    }
    return res.status(200).json(await Product.findByIdAndDelete(id));
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  getProductByCategory,
  getProductsByTitle,
  createProduct,
  deleteProduct,
  updateProduct,
};
