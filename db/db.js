import mongoose from "mongoose";

const connectDB = async () => {
  // MongoDB connection
  try {
    await mongoose.connect(process.env.MONGO_URI, {}); // Connect to MongoDB Atlas
    console.log("MongoDB Atlas bağlantısı başarılı"); // Log success
  } catch (error) {
    console.error("MongoDB bağlantı hatası:", error.message);
    process.exit(1); // Exit with failure
  }
};

export default connectDB;
