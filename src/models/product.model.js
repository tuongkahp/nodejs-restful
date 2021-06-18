const mongoose = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    code: String,
    name: String,
    images: [
      { String }
    ],
    details: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductDetail"
      }
    ],
    isDeleted: Boolean,
    price: Number,
    promotionalPrice: Number,
    sold: Number,
    review: Number,
    rating: Number
  })
);

module.exports = Product;
