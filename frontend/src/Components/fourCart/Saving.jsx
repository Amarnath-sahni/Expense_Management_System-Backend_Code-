import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function Saving() {
  // Target states
  const [targetIncome, setTargetIncome] = useState(100000);
  const [targetExpense, setTargetExpense] = useState(50000);
  const [showForm, setShowForm] = useState(false);

  // Actual numbers from backend
  const [actualIncome, setActualIncome] = useState(0);
  const [actualExpense, setActualExpense] = useState(0);

  // Target ID for updating
  const [targetId, setTargetId] = useState(null);

  // Fetch target, income, and expense from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch target
        const targetRes = await fetch("http://localhost:5000/target/fetch");
        const targetData = await targetRes.json();
        if (targetData.success && targetData.targets.length > 0) {
          const currentTarget = targetData.targets[0]; // first target
          setTargetIncome(currentTarget.targetIncome);
          setTargetExpense(currentTarget.targetExpense);
          setTargetId(currentTarget._id);
          setShowForm(false); // hide form if already set
        } else {
          setShowForm(true); // show form if no target exists
        }

        // Fetch income
        const incomeRes = await fetch("http://localhost:5000/income/fetch");
        const incomeData = await incomeRes.json();
        if (incomeData.success) {
          const sumIncome = incomeData.incomes.reduce((acc, i) => acc + i.amount, 0);
          setActualIncome(sumIncome);
        }

        // Fetch expense
        const expenseRes = await fetch("http://localhost:5000/expense/fetch");
        const expenseData = await expenseRes.json();
        if (expenseData.success) {
          const sumExpense = expenseData.expenses.reduce((acc, e) => acc + e.amount, 0);
          setActualExpense(sumExpense);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, []);

  // Handle target update/add
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/target/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          targetIncome,
          targetExpense,
          year: new Date().getFullYear(),
          user: null,
          _id: targetId,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setTargetId(data.target._id);
        setShowForm(false); // hide form after saving
        alert("Targets saved successfully!");
      }
    } catch (err) {
      console.error("Error updating target:", err);
      alert("Error saving targets!");
    }
  };

  const remainingTarget = targetIncome - targetExpense;
  const remainingActual = actualIncome - actualExpense;

  // Amount needed to reach the target
  const incomeNeeded = Math.max(targetIncome - actualIncome, 0);
  const expenseNeeded = Math.max(targetExpense - actualExpense, 0);
  const remainingNeeded = Math.max(remainingTarget - remainingActual, 0);

  const chartData = [
    { name: "Income", Actual: actualIncome, Target: targetIncome },
    { name: "Expense", Actual: actualExpense, Target: targetExpense },
    { name: "Remaining", Actual: remainingActual, Target: remainingTarget },
  ];

  const targetReached = actualIncome >= targetIncome && actualExpense <= targetExpense;

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">Yearly Targets</h1>

      {/* Toggle Form / Set Target Button */}
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="mb-6 px-6 py-3 bg-cyan-600 rounded-xl hover:bg-cyan-500 transition"
        >
          {targetId ? "Update Target" : "Set Target"}
        </button>
      ) : (
        <form
          onSubmit={handleUpdate}
          className="bg-gray-800 shadow-md rounded-xl p-6 mb-8 w-full max-w-md"
        >
          <h2 className="text-xl font-semibold mb-4 text-teal-400">Set Your Targets</h2>

          <label className="block mb-3">
            <span className="text-gray-200">Target Income (₹)</span>
            <input
              type="number"
              value={targetIncome}
              onChange={(e) => setTargetIncome(Number(e.target.value))}
              className="w-full border p-2 rounded-lg mt-1 bg-gray-900 text-gray-100"
            />
          </label>

          <label className="block mb-3">
            <span className="text-gray-200">Target Expense (₹)</span>
            <input
              type="number"
              value={targetExpense}
              onChange={(e) => setTargetExpense(Number(e.target.value))}
              className="w-full border p-2 rounded-lg mt-1 bg-gray-900 text-gray-100"
            />
          </label>

          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-cyan-600 rounded-xl hover:bg-cyan-500 transition"
          >
            Save Targets
          </button>
        </form>
      )}

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 w-full max-w-6xl">
        <div className="bg-green-900/40 shadow rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold mb-2 text-green-300">Income</h3>
          <p className="text-yellow-500">Target: ₹{targetIncome.toLocaleString("en-IN")}</p>
          <p>Actual: ₹{actualIncome.toLocaleString("en-IN")}</p>
        </div>

        <div className="bg-red-900/40 shadow rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold mb-2 text-red-300">Expense</h3>
          <p className="text-yellow-500">Target: ₹{targetExpense.toLocaleString("en-IN")}</p>
          <p>Actual: ₹{actualExpense.toLocaleString("en-IN")}</p>
        </div>

        <div className="bg-blue-900/40 shadow rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold mb-2 text-cyan-300">Remaining</h3>
          <p className="text-yellow-500">Target: ₹{remainingTarget.toLocaleString("en-IN")}</p>
          <p>Actual: ₹{remainingActual.toLocaleString("en-IN")}</p>
        </div>

        <div className="bg-yellow-900/40 shadow rounded-xl p-6 text-center">
          <h3 className="text-lg font-semibold mb-2 text-yellow-300">To Reach Target</h3>
          <p className="text-green-500">Income: ₹{incomeNeeded.toLocaleString("en-IN")}</p>
          <p className="text-red-500">Expense: ₹{expenseNeeded.toLocaleString("en-IN")}</p>
          <p className="text-blue-500">Remaining: ₹{remainingNeeded.toLocaleString("en-IN")}</p>
        </div>
      </div>

      {/* Growth Chart */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-4xl mb-6">
        <h2 className="text-xl font-semibold mb-4 text-teal-400">Yearly Progress</h2>
        <BarChart
          width={600}
          height={300}
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip
            contentStyle={{ backgroundColor: "#1f2937", borderRadius: "8px", border: "none" }}
            itemStyle={{ color: "#fff" }}
          />
          <Legend wrapperStyle={{ color: "#fff" }} />
          <Bar dataKey="Actual" fill="#22c55e" />
          <Bar dataKey="Target" fill="#0ea5e9" />
        </BarChart>
      </div>

      {/* Target Reached Message */}
      {targetReached && (
        <div className="bg-green-600 text-gray-900 font-bold px-6 py-4 rounded-xl shadow-md">
          🎉 Congratulations! You have reached this year's target!
        </div>
      )}
    </div>
  );
}

export default Saving;
