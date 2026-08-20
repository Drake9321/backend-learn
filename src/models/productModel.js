import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true
  },
  product_price: {
    type: Number,
    required: true
  },
  product_description: {
    type: String,
    required: true
  },
  isInStock: {
    type: Boolean,
    required: true
  },
},{ timestamps: true});

const Product = mongoose.model("products", productSchema);

export default Product;