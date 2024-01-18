const Category = require("../models/CategoryModel");

const getAllCategories = async (_, res) => {
  const categories = await Category.find({});
  return res.status(200).json(categories);
};

const getCategory = async (req, res) => {
  const { id } = req.params;
  const category = await Category.findById(id);
  return res.status(200).json(category);
};

const createCategory = async (req, res) => {
  const { title } = req.body;
  try {
    const category = await Category.create({ title });
    return res.status(200).json(category);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  try {
    const category = await Category.findByIdAndUpdate(id, { title });
    return res.status(200).json(category);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findByIdAndDelete(id);
    return res.status(200).json(category);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
