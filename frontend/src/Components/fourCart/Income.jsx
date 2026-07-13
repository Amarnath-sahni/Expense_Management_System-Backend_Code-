import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function Income() {
  const [incomes, setIncomes] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ source: "", amount: "", file: null });

  // Colors for Pie Chart
  const COLORS = ["#4ade80", "#06b6d4", "#f472b6", "#facc15"];

  // Fetch incomes from backend
  const fetchIncomes = async () => {
    try {
      const res = await fetch("http://localhost:5000/income/fetch");
      const data = await res.json();
      if (data.success) {
        setIncomes(data.incomes);
      }
    } catch (err) {
      console.error("Error fetching incomes:", err);
    }
  };

  useEffect(() => {
    fetchIncomes();
  }, []);

  const totalIncome = incomes.reduce((sum, item) => sum + item.amount, 0);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.source || !formData.amount) return alert("Please fill all fields");

    // POST income to backend
    try {
      const res = await fetch("http://localhost:5000/income/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: formData.source,
          amount: Number(formData.amount),
        }),
      });

      const data = await res.json();
      if (data.success) {
        // Add newly added income to state
        setIncomes([...incomes, data.income]);
        setShowForm(false);
        setFormData({ source: "", amount: "", file: null });
      } else {
        alert(data.message || "Error adding income");
      }
    } catch (err) {
      console.error("Error adding income:", err);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-gray-100">
      <h1 className="text-3xl font-semibold text-center mb-6 text-cyan-400">
        Income Dashboard
      </h1>

      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-teal-400">
          Total Income: ₹{totalIncome.toLocaleString("en-IN")}
        </h2>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-cyan-600 text-gray-900 px-6 py-2 rounded-xl hover:bg-cyan-500 transition"
        >
          {showForm ? "Close Form" : "➕ Add Income"}
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 shadow-lg rounded-xl p-6 max-w-md mx-auto mb-8"
        >
          <label className="block mb-3">
            <span className="text-gray-200">Source:</span>
            <input
              type="text"
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="w-full border border-gray-600 p-2 rounded-lg mt-1 bg-gray-900 text-gray-100"
              placeholder="e.g., Salary, Freelance"
            />
          </label>

          <label className="block mb-3">
            <span className="text-gray-200">Amount (₹):</span>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full border border-gray-600 p-2 rounded-lg mt-1 bg-gray-900 text-gray-100"
              placeholder="Enter amount"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-200">Upload File (Optional for future):</span>
            <input
              type="file"
              name="file"
              accept=".pdf,.xlsx,.xls,.docx"
              onChange={handleChange}
              className="w-full mt-1 text-gray-100"
            />
          </label>

          <button
            type="submit"
            className="bg-teal-500 text-gray-900 px-6 py-2 rounded-lg hover:bg-teal-400 transition"
          >
            Save Income
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-teal-400">Income Records</h2>
          <ul className="space-y-3">
            {incomes.map((item) => (
              <li
                key={item._id || item.id}
                className="flex justify-between p-3 bg-gray-700 rounded-lg"
              >
                <span>{item.source}</span>
                <span className="font-semibold text-cyan-400">
                  ₹{item.amount.toLocaleString("en-IN")}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 text-teal-400">Income Overview</h2>
          <PieChart width={300} height={300}>
            <Pie
              data={incomes}
              dataKey="amount"
              nameKey="source"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label={{ fill: "#fff" }}
            >
              {incomes.map((entry, index) => (
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
      </div>
    </div>
  );
}

export default Income;
