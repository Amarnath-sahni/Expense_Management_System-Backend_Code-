import React from "react";

const Pricing = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow z-50">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Upgrade to SmartExpense Pro</h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Unlock AI-powered insights, smarter expense tracking, and advanced features to manage your money effortlessly.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {/* Free Plan */}
        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Free</h2>
          <p className="text-gray-600 mb-6">Basic expense tracking features</p>
          <p className="text-4xl font-bold text-gray-900 mb-6">$0<span className="text-base font-normal">/month</span></p>
          <ul className="mb-6 space-y-2 text-gray-700">
            <li>✅ Track expenses manually</li>
            <li>✅ Generate monthly summary</li>
            <li>❌ AI insights</li>
            <li>❌ Advanced reports</li>
          </ul>
          <button className="w-full py-3 px-6 bg-gray-300 text-gray-800 font-semibold rounded-lg hover:bg-gray-400 transition">
            Get Started
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-8 rounded-xl shadow-lg text-white border border-purple-700">
          <h2 className="text-2xl font-semibold mb-4">Pro</h2>
          <p className="mb-6">Unlock AI insights & advanced features</p>
          <p className="text-4xl font-bold mb-6">$9.99<span className="text-base font-normal">/month</span></p>
          <ul className="mb-6 space-y-2">
            <li>✅ AI-powered spending insights</li>
            <li>✅ Advanced reports & analytics</li>
            <li>✅ Automatic categorization of expenses</li>
            <li>✅ Smart budget suggestions</li>
          </ul>
          <button className="w-full py-3 px-6 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-200 transition">
            Upgrade Now
          </button>
        </div>
      </div>

      {/* AI Features Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h3 className="text-3xl font-bold mb-6">Why AI Makes a Difference</h3>
        <p className="text-gray-700 mb-4">
          SmartExpense AI analyzes your spending habits, predicts future expenses, and provides personalized tips to save money efficiently.
        </p>
        <p className="text-gray-700">
          With Pro, you get intelligent insights, smart budget suggestions, and automated expense tracking—all in one place.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
