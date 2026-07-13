import express from "express";
import { addExpense, getExpenses } from "../controller/expense.controller.js";

export const ExpenseRouter = express.Router();

// Routes (TEMP SIMPLE)
ExpenseRouter.post("/add", addExpense);
ExpenseRouter.get("/fetch", getExpenses);

export default ExpenseRouter;
