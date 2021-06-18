const mongoose = require("mongoose");

const ProductDetail = mongoose.model(
  "ProductDetail",
  new mongoose.Schema({
    color: String,
    size: String,
    isDeleted: Boolean,
    image: String,
    inventory: Number
  })
);

details: [
  {
    color: 'gray',
    size: 'M',
    inventory: 1,
    image: 'https://im.uniqlo.com/images/common/pc/goods/424873/item/08_424873.jpg',
  }, {
    color: 'gray',
    size: 'M',
    image: 'https://im.uniqlo.com/images/common/pc/goods/424873/item/08_424873.jpg',
    inventory: 1
  }
]

module.exports = ProductDetail;
