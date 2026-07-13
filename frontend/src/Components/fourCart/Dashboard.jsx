import React, { useState } from "react";
import Income from "./Income";
import Expense from "./Expense";
import Remaining from "./Remaining";

function Dashboard() {
  // Manage income and expense data here
  const [incomes, setIncomes] = useState([
    { id: 1, source: "Salary", amount: 50000 },
    { id: 2, source: "Freelance", amount: 15000 },
  ]);

  const [expenses, setExpenses] = useState([
    { id: 1, category: "Food", amount: 2000 },
    { id: 2, category: "Travel", amount: 5000 },
  ]);

  // Totals
  const totalIncome = incomes.reduce((sum, item) => sum + item.amount, 0);
  const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-8">Dashboard</h1>

      {/* Pass data as props to Income & Expense */}
      <Income incomes={incomes} setIncomes={setIncomes} />
      <Expense expenses={expenses} setExpenses={setExpenses} />

      {/* Remaining page gets totals via props */}
      <Remaining totalIncome={totalIncome} totalExpense={totalExpense} />
    </div>
  );
}

export default Dashboard;
