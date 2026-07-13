import mongoose from "mongoose";

const targetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false, // optional for now
  },
  targetIncome: {
    type: Number,
    required: true,
  },
  targetExpense: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

export const Target = mongoose.model("Target", targetSchema);
