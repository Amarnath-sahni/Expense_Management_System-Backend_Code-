import { Expense } from "../models/expense.model.js";

// Add Expense (TEMP: no auth, no file)
export const addExpense = async (req, res) => {
  try {
    const { category, amount } = req.body;

    if (!category || !amount) {
      return res
        .status(400)
        .json({ success: false, message: "All fields required" });
    }

    const newExpense = await Expense.create({
      category,
      amount
    });

    res.status(201).json({
      success: true,
      message: "Expense added",
      expense: newExpense
    });
  } catch (err) {
    console.error("Error adding expense:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

// Get Expenses (TEMP: fetch all)
export const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find();

    res.status(200).json({
      success: true,
      expenses
    });
  } catch (err) {
    console.error("Error fetching expenses:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};
