import express from "express";
import connectToDatabase from "./config/db.js";
import productRouter from "./routes/productRouter.js";

const app = express();

app.use(express.json());
app.use("/api/products", productRouter);
connectToDatabase();

export default app;