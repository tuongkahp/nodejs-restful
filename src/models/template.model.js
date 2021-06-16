const mongoose = require("mongoose");

const Template = mongoose.model(
  "Template",
  new mongoose.Schema({
    code: String,
    name: String,
    imageUrl: String,
    previewUrl: String,
    isDeleted: Boolean
  })
);

module.exports = Template;
