import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// Colors for Pie Chart: Green = income, Red = expense
const COLORS = ["#4ade80", "#f87171"]; 

function Remaining() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch incomes
        const incomeRes = await fetch("http://localhost:5000/income/fetch");
        const incomeData = await incomeRes.json();
        if (incomeData.success) {
          const incomeSum = incomeData.incomes.reduce((sum, item) => sum + item.amount, 0);
          setTotalIncome(incomeSum);
        }

        // Fetch expenses
        const expenseRes = await fetch("http://localhost:5000/expense/fetch");
        const expenseData = await expenseRes.json();
        if (expenseData.success) {
          const expenseSum = expenseData.expenses.reduce((sum, item) => sum + item.amount, 0);
          setTotalExpense(expenseSum);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const remaining = totalIncome - totalExpense;

  const data = [
    { name: "Income", value: totalIncome },
    { name: "Expenses", value: totalExpense },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">
        Remaining Balance Overview
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full max-w-5xl">
        <div className="bg-gray-800 shadow-lg rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold mb-2 text-teal-300">Total Income</h2>
          <p className="text-2xl font-bold text-green-400">
            ₹{totalIncome.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="bg-gray-800 shadow-lg rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold mb-2 text-red-400">Total Expenses</h2>
          <p className="text-2xl font-bold text-red-500">
            ₹{totalExpense.toLocaleString("en-IN")}
          </p>
        </div>

        <div className="bg-gray-800 shadow-lg rounded-xl p-6 text-center">
          <h2 className="text-lg font-semibold mb-2 text-blue-400">Remaining</h2>
          <p className="text-2xl font-bold text-cyan-400">
            ₹{remaining.toLocaleString("en-IN")}
          </p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center mb-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-teal-300">Income vs Expense</h2>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={{ fill: "#fff" }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: "#1f2937", borderRadius: "8px", border: "none" }}
            itemStyle={{ color: "#fff" }}
          />
          <Legend wrapperStyle={{ color: "#fff" }} />
        </PieChart>
      </div>

      {/* AI Suggestion Button */}
      <button
        onClick={() => (window.location.href = "/ai")}
        className="px-6 py-3 bg-cyan-600 text-gray-900 rounded-xl hover:bg-cyan-500 transition"
      >
        💡 Get AI Suggestion
      </button>
    </div>
  );
}

export default Remaining;
