import React, { useState } from "react";

function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [currency, setCurrency] = useState("INR");

  return (
    <div className="min-h-screen p-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Settings</h1>

        {/* Appearance Section */}
        <section className="mb-8 bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Appearance</h2>
          <div className="flex items-center justify-between mb-4">
            <span>Dark Mode</span>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              className="w-5 h-5 accent-blue-500"
            />
          </div>
          <p className="text-gray-300 text-sm">
            Toggle dark mode for the SmartExpend interface.
          </p>
        </section>

        {/* Notifications Section */}
        <section className="mb-8 bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
          <div className="flex items-center justify-between mb-4">
            <span>Email Notifications</span>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="w-5 h-5 accent-blue-500"
            />
          </div>
          <p className="text-gray-300 text-sm">
            Receive updates and alerts about your expenses and budgets.
          </p>
        </section>

        {/* Currency Section */}
        <section className="mb-8 bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Currency</h2>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="p-3 bg-gray-700/50 border border-gray-600 rounded-md text-white"
          >
            <option value="INR">₹ INR</option>
            <option value="USD">$ USD</option>
            <option value="EUR">€ EUR</option>
          </select>
        </section>

        {/* Upcoming Features Section */}
        <section className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Features</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Advanced Analytics Dashboard (Coming Soon)</li>
            <li>Export Data to CSV/PDF (Coming Soon)</li>
            <li>Custom Categories & Tags (Coming Soon)</li>
            <li>Integration with Banks & UPI (Coming Soon)</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default SettingsPage;
