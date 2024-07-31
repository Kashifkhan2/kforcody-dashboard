import mongoose, { Schema } from "mongoose";

const AdminSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now() },
});

export default mongoose.models.adminuser ||
  mongoose.model("adminuser", AdminSchema);
