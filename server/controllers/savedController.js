const Saved = require("../models/SavedModel");

const getSaveds = async (req, res) => {
  const saveds = await Saved.findOne({ user_id: req.user._id });
  return res.status(200).json(saveds);
};

const addToSaved = async (req, res) => {
  try {
    const { product } = req.body;
    const saved = await Saved.findOne({ user_id: req.user._id });

    if (saved) {
      saved.products = [...saved.products, product];
      saved.save();
    } else {
      var save = await Saved.create({
        products: [product],
        user_id: req.user._id,
      });
    }

    return res.status(200).json(saved ? saved : save);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const removeFromSaved = async (req, res) => {
  try {
    const { product } = req.body;
    const saved = await Saved.findOne({ user_id: req.user._id });
    saved.products = saved.products.filter(
      (product_) => product_._id !== product._id
    );
    saved.save();

    return res.status(200).json(saved);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getSaveds,
  addToSaved,
  removeFromSaved,
};
