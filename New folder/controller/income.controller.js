import { Income } from "../models/income.model.js";

// Add Income
export const addIncome = async (req, res) => {
  try {
    const { source, amount } = req.body;

    if (!source || !amount) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }

    const newIncome = await Income.create({
      source,
      amount,
      file: req.body.file || null // optional for future
    });

    res.status(201).json({ success: true, message: "Income added", income: newIncome });
  } catch (err) {
    console.error("Error adding income:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get All Incomes
export const getIncomes = async (req, res) => {
  try {
    const incomes = await Income.find();
    res.status(200).json({ success: true, incomes });
  } catch (err) {
    console.error("Error fetching incomes:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
