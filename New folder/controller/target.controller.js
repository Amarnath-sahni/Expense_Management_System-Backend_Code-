import { Target } from "../models/target.model.js";

// Add or update target
export const addTarget = async (req, res) => {
  try {
    const { targetIncome, targetExpense, year, user } = req.body;

    if (!targetIncome || !targetExpense || !year) {
      return res.status(400).json({ success: false, message: "All fields required" });
    }

    // Optional: check if target for this year exists for this user
    const existingTarget = await Target.findOne({ year, user: user || null });
    if (existingTarget) {
      existingTarget.targetIncome = targetIncome;
      existingTarget.targetExpense = targetExpense;
      await existingTarget.save();
      return res.status(200).json({ success: true, message: "Target updated", target: existingTarget });
    }

    const newTarget = await Target.create({
      targetIncome,
      targetExpense,
      year,
      user: user || null, // optional user
    });

    res.status(201).json({ success: true, message: "Target added", target: newTarget });
  } catch (err) {
    console.error("Error adding target:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get all targets
export const getTarget = async (req, res) => {
  try {
    const targets = await Target.find(); // You can later filter by user if needed
    res.status(200).json({ success: true, targets });
  } catch (err) {
    console.error("Error fetching targets:", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
