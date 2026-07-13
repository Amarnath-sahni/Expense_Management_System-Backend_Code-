import React from "react";
import { FaMoneyBillWave, FaChartPie, FaBullseye } from "react-icons/fa";
import { Activity, Settings } from "lucide-react";
import { motion } from "framer-motion";
import phoneImg from "../assets/image.png"; // Add your app screenshot
import Footer from "../Components/common/Footer";

const features = [
  { title: "Income Tracking", description: "Easily log and visualize your income from all sources.", icon: <FaMoneyBillWave size={28} className="text-blue-400" /> },
  { title: "Expense Management", description: "Categorize and track your spending efficiently.", icon: <FaChartPie size={28} className="text-green-400" /> },
  { title: "Set Targets", description: "Set financial goals and monitor your yearly growth.", icon: <FaBullseye size={28} className="text-red-400" /> },
  { title: "AI Insights", description: "Get personalized AI suggestions to save and invest.", icon: <Activity size={28} className="text-indigo-400" /> },
];

const Home = () => {
  return (
    <div className="bg-gray-900 text-white">

      {/* Hero Section */}
      <section
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${phoneImg})` }}
      >
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 bg-gray-900/60 p-8 rounded-3xl"
        >
          <p className="text-indigo-300 uppercase tracking-wide mb-3 text-sm font-semibold">Introducing SmartSpense</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Take Control of Your Finances</h1>
          <p className="text-lg mb-6 text-gray-200">
            Track income, manage expenses, set targets, and get AI suggestions — all in one app.
          </p>
          <div className="flex gap-4">
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          {/* Placeholder for screenshot image */}
          <img src={phoneImg} alt="App Screenshot" className="rounded-3xl shadow-xl w-full max-w-md" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-800/60 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 md:px-20 py-20 ">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800/60 p-6 rounded-2xl text-center shadow-md">
            <Settings size={32} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Set Up Account</h3>
            <p className="text-gray-300">Sign up and personalize your financial dashboard.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800/60 p-6 rounded-2xl text-center shadow-md">
            <FaMoneyBillWave size={32} className="mx-auto mb-4 text-green-400" />
            <h3 className="text-xl font-semibold mb-2">Track Finances</h3>
            <p className="text-gray-300">Add your income and expenses manually or via upload.</p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800/60 p-6 rounded-2xl text-center shadow-md">
            <FaChartPie size={32} className="mx-auto mb-4 text-blue-400" />
            <h3 className="text-xl font-semibold mb-2">Analyze & Grow</h3>
            <p className="text-gray-300">View remaining balance, targets, and AI insights.</p>
          </motion.div>
        </div>
      </section>

  <Footer />
    
    </div>
  );
};

export default Home;
