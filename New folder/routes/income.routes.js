import express from "express";
import { addIncome, getIncomes } from "../controller/income.controller.js";

export const incomeRouter = express.Router();

// Routes
incomeRouter.post("/add", addIncome); // Add new income
incomeRouter.get("/fetch", getIncomes); // Get all incomes

export default incomeRouter;
