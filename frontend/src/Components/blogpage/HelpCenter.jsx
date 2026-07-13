import React, { useState } from "react";

const faqs = [
  {
    question: "How do I track my expenses?",
    answer: "Go to the Dashboard and click on 'Add Expense'. Fill in the details like amount, category, and date. Your expense will be recorded automatically."
  },
  {
    question: "Can I set a monthly budget?",
    answer: "Yes! Go to 'Budget Settings', set your monthly limit, and SmartExpend will notify you when you approach it."
  },
  {
    question: "How do I view my spending trends?",
    answer: "Go to 'Reports' to see charts and graphs of your spending patterns, categorized by type and time period."
  },
  {
    question: "Is my financial data secure?",
    answer: "Absolutely! SmartExpend encrypts your data and never shares it with third parties."
  },
];

function HelpCenter() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-gray-900/90 to-gray-800/90 text-white">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">SmartExpend Help Center</h1>

        {/* FAQ Section */}
        <section className="mb-12 bg-gray-800/50 rounded-lg p-4 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-3 border-b border-gray-600 pb-2">
              <button
                className="w-full text-left font-medium text-lg flex justify-between items-center hover:text-blue-400 transition"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {faq.question}
                <span>{activeIndex === index ? "▲" : "▼"}</span>
              </button>
              {activeIndex === index && <p className="mt-2 text-gray-300">{faq.answer}</p>}
            </div>
          ))}
        </section>

        {/* Tutorial Section */}
        <section className="mb-12 bg-gray-800/50 rounded-lg p-4 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Video Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="SmartExpend Tutorial 1"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <iframe
              className="w-full h-64 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/9bZkp7q19f0"
              title="SmartExpend Tutorial 2"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="bg-gray-800/50 rounded-lg p-4 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
          <p className="text-gray-300 mb-4">
            If you can't find your answer, reach out to our support team:
          </p>
          <form className="flex flex-col gap-4 max-w-md">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded-md bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white p-3 rounded-md font-semibold"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default HelpCenter;
