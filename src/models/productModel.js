import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: [true, "Product name is required"]
  },
  product_price: {
    type: Number,
    required: [true, "Product price is required"],
    validate: {
        validator: function(value) {
            return value >= 0;
        },
        message: "Product price must be a positive number"
    }
  },
  product_description: {
    type: String,
    required: [true, "Product description is required"]
  },
  isInStock: {
    type: Boolean,
    default: true
  },
},{ timestamps: true});

const Product = mongoose.model("products", productSchema);

export default Product;