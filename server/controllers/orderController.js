const Order = require("../models/OrderModel");

const getAllOrders = async (req, res) => {
  const orders = await Order.find({}).sort({ createdAt: -1 });
  return res.status(200).json(orders);
};

const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);

    return res.status(200).json(order);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const createOrder = async (req, res) => {
  try {
    const { name, number, product } = req.body;
    const order = await Order.create({
      name,
      number,
      product,
    });

    return res.status(200).json(order);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);
    return res.status(200).json(order);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getAllOrders,
  getOrder,
  createOrder,
  deleteOrder,
};
