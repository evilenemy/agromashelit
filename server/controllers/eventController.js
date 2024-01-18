const Event = require("../models/EventModel");
const path = require("path");
const fs = require("fs");

const getEvents = async (req, res) =>
  res.status(200).json(await Event.find({}));

const getEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findById(id);
    return res.status(200).json(event);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const createEvent = async (req, res) => {
  try {
    const { name } = req.body;
    let imagepath = "\\uploads\\events\\path";
    if (req.files) {
      const image = req.files.image;
      imagepath = imagepath.replace("path", image.name);
      image.mv(path.resolve(__dirname, "..") + imagepath, (err) => err);
    }
    const event = await Event.create({ name, image: imagepath });
    return res.status(200).json(event);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const event = await Event.findById(id);
    let imagepath = "\\uploads\\events\\path";

    if (req.files) {
      fs.rm(path.resolve(__dirname, "..") + event.image, (err) => err);

      const image = req.files.image;
      imagepath = imagepath.replace("path", image.name);
      image.mv(path.resolve(__dirname, "..") + imagepath);
    }

    event.name = name;
    event.image =
      imagepath === "\\uploads\\events\\path" ? event.image : imagepath;
    event.save();

    return res.status(200).json(event);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const event = Event.findById(id);

    fs.rm(path.resolve(__dirname, "..") + event.image);

    return res.status(200).json(await Event.findByIdAndDelete(id));
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};
