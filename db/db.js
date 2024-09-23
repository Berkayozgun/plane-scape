import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB Atlas bağlantısı başarılı");
  } catch (error) {
    console.error("MongoDB bağlantı hatası:", error.message);
    process.exit(1); // Hata varsa süreci sonlandır
  }
};

export default connectDB;
