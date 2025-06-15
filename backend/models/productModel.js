const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: [String], // 👈 better to specify type of array contents
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  sizes: {
    type: [String], // 👈 again, specify the array type if you expect strings
    required: true,
  },
  bestseller: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Number,
    required: true,
  },
});

// 👇 This will create a `products` collection (pluralized automatically)
const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
