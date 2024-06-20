import mongoose from "mongoose";
import { config } from "./config";
connectDB().catch((err) => console.log(err));

async function connectDB() {
  await mongoose.connect(config.databaseUrl as string);
  mongoose.connection.on("connected", () => {
    console.log("Connected to database successfully");
  });

  mongoose.connection.on("error", (err) => {
    console.log("Error in connecting to databasee.", err);
  });
}

export default connectDB;
