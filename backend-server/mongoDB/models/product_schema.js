const mongoose = require("mongoose");

const product_schema = new mongoose.Schema({
  id: String,
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  description: String,
  discount: String,
  tagline: String,
});

const products = new mongoose.model("products", product_schema);

module.exports = products;
