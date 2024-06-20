import mongoose from "mongoose";
import { User } from "./userTypes";

const userSchema = new mongoose.Schema<User>(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<User>("User", userSchema);
