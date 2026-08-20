import express from "express";
import connectToDatabase from "./config/db.js";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();

app.use(express.json());
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
connectToDatabase();

export default app;