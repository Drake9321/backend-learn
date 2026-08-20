import express from "express";

const productRouter = express.Router();

import { createProduct, deleteProduct, updateProduct, getProductById, getAllProducts } from "../controllers/productController.js";

productRouter.post("/", async (req, res) => {
  createProduct(req, res);
});

productRouter.patch("/:id", async (req, res) => {
  updateProduct(req, res);
});

productRouter.delete("/:id", async (req, res) => {
  deleteProduct(req, res);
});

productRouter.get("/", async (req, res) => {
  getAllProducts(req, res);
});

productRouter.get("/:id", async (req, res) => {
  getProductById(req, res);
});

export default productRouter;