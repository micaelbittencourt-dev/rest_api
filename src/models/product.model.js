//Importing Libraries
const mongoose = require("mongoose");

//using monoose to create the product schema
const productSchema = mongoose.Schema({
  productId: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "name is required"],
    min: 3,
    max: 12,
  },
  description: {
    type: String,
    required: [true, "description is required"],
    min: 50,
    max: 150,
  },
  price: {
    type: Number,
    required: [true, "price field is required"],
  },
  files: {
    type: Array,
  },
});

//exporting the product schema as monngose collection
module.exports = mongoose.model("Product", productSchema);
