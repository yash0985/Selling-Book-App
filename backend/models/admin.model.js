import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    union: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const Admin = mongoose.model("Admin", adminSchema);