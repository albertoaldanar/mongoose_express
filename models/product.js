const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
  p_id: Number,
  description: String,
  price: Number,
  color: String,
  photo: String,
  inCart: Boolean
});

module.exports = mongoose.model("Product", ProductSchema);
