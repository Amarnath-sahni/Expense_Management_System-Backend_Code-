import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

function Expense() {
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ category: "", amount: "" });

  // ✅ FETCH EXPENSES FROM BACKEND
  const fetchExpenses = async () => {
    try {
      const res = await fetch("http://localhost:5000/expense/fetch");
      const data = await res.json();
      if (data.success) {
        setExpenses(data.expenses);
      }
    } catch (err) {
      console.error("Error fetching expenses", err);
    }
  };

  // ✅ FETCH ON PAGE LOAD
  useEffect(() => {
    fetchExpenses();
  }, []);

  // ✅ TOTAL EXPENSE
  const totalExpense = expenses.reduce((sum, e) => sum + e.amount, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ ADD EXPENSE TO BACKEND
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.category || !formData.amount) {
      return alert("Please fill all fields");
    }

    try {
      const res = await fetch("http://localhost:5000/expense/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          category: formData.category,
          amount: Number(formData.amount)
        })
      });

      const data = await res.json();

      if (data.success) {
        setExpenses([...expenses, data.expense]); // ✅ update UI
        setShowForm(false);
        setFormData({ category: "", amount: "" });
      }
    } catch (err) {
      console.error("Error adding expense", err);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-gray-100">
      <h1 className="text-3xl font-semibold text-center mb-6 text-cyan-400">
        Expense Dashboard
      </h1>

      {/* Total Expense */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-teal-400">
          Total Expense: ₹{totalExpense.toLocaleString("en-IN")}
        </h2>
      </div>

      {/* Add Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-cyan-600 text-gray-900 px-6 py-2 rounded-xl hover:bg-cyan-500 transition"
        >
          {showForm ? "Close Form" : "➕ Add Expense"}
        </button>
      </div>

      {/* Add Expense Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 shadow-lg rounded-xl p-6 max-w-md mx-auto mb-8"
        >
          <label className="block mb-3">
            <span>Category</span>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-900 border border-gray-600"
            />
          </label>

          <label className="block mb-4">
            <span>Amount</span>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-900 border border-gray-600"
            />
          </label>

          <label className="block mb-4"> <span className="text-gray-200">Upload Bill (PDF, Excel, Docx):</span> <input type="file" name="file" accept=".pdf,.xlsx,.xls,.docx" onChange={handleChange} className="w-full mt-1 text-gray-100" /> </label>
          <button
            type="submit"
            className="bg-teal-500 px-6 py-2 rounded-lg hover:bg-teal-400"
          >
            Save Expense
          </button>
        </form>
      )}

      {/* Expense List + Pie Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* List */}
        <div className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-xl mb-4 text-teal-400">Expense Records</h2>
          <ul className="space-y-3">
            {expenses.map((item) => (
              <li
                key={item._id}
                className="flex justify-between bg-gray-700 p-3 rounded"
              >
                <span>{item.category}</span>
                <span className="text-cyan-400 font-semibold">
                  ₹{item.amount}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pie Chart */}
        <div className="bg-gray-800 p-6 rounded-xl flex justify-center">
          <PieChart width={300} height={300}>
            <Pie
              data={expenses}
              dataKey="amount"
              nameKey="category"
              outerRadius={100}
            >
              {expenses.map((_, index) => (
                <Cell
                  key={index}
                  fill={["#4ade80", "#06b6d4", "#f472b6", "#facc15", "#60a5fa"][index % 5]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default Expense;
