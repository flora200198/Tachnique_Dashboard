import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: String,
  email: { type: String, required: true, unique: true },
  department: String,
}, { timestamps: true });

export default mongoose.model("User", userSchema);
