import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://pulugtg:pulugtg123@cluster0.kikrx3q.mongodb.net/test"
      // Gantilah "your-database-name" dengan nama database yang sesuai
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.error("Error connecting to the database:", e);
  }
}
