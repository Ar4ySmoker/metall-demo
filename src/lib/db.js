import mongoose from "mongoose";

export const connectDB = async () => {
  try {
   await mongoose.connect(process.env.MONGODB_URI , {
    dbName: "metall",
  });
  console.log("connected");
    }
   catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};