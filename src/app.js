import mongoose from "mongoose";
import express from "express";

const app = express();
const dbUrl = process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase";

mongoose.connect(dbUrl);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

export default app;