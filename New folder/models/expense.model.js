import mongoose from "mongoose";

// Expense Schema
const expenseSchema = new mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, // Link to User
      ref: "User", // Reference user model
      required: false  //false
    },
    category: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    file: {
      type: String, // store file path or URL
    },
  },
  { timestamps: true } // automatically adds createdAt and updatedAt
);

export const Expense = mongoose.model("Expense", expenseSchema);
