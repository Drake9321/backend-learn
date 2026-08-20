import mongoose from "mongoose";

const dbUrl = process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process with an error code
  }
};

export default connectToDatabase;