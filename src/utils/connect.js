import mongoose from "mongoose";

export async function connectDB() {
  try {
    mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.log(error);
  }
}
