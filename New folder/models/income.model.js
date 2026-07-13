import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, // Optional link to user
    ref: "User",
    required: false
  },
  source: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  file: {
    type: String, // path or URL, optional for future
    required: false
  }
}, { timestamps: true });

export const Income = mongoose.model("Income", incomeSchema);
