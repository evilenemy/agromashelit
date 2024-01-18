const Order = require("../models/OrderModel");

const getOrder = async (req, res) => {
  const orders = await Order.findOne({ user_id: req.user._id });
  return res.status(200).json(orders);
};

const addToOrders = async (req, res) => {
  try {
    const { product } = req.body;
    const orders = await Order.findOne({ user_id: req.user._id });
    if (orders) {
      orders.orders = [...orders.orders, product];
      orders.save();
    } else {
      var order = await Order.create({
        orders: [product],
        user_id: req.user._id,
      });
    }
    return res.status(200).json(orders ? orders : order);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const removeFromOrders = async (req, res) => {
  try {
    const { product } = req.body;
    const orders = await Order.findOne({ user_id: req.user._id });
    orders.orders = orders.orders.filter((order) => order._id !== product._id);
    orders.save();

    return res.status(200).json(orders);
  } catch (err) {
    return res.status(200).json({ error: err.message });
  }
};

module.exports = {
  getOrder,
  addToOrders,
  removeFromOrders,
};
