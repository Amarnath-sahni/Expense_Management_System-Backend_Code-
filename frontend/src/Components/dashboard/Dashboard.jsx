import React, { useState } from "react";
import Sidebar from "./Sidebar";
import TopCards from "./TopCards";
import GrowthChart from "./GrowthChart";
import InvestPanel from "./InvestPanel";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-100 pt-20 pb-8"
    >
      {/* 🔹 Mobile Header */}
      <div className="flex items-center justify-between sm:hidden px-4 mb-4">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-lg font-semibold tracking-wide">Dashboard</h1>
      </div>

      {/* 🔹 Main Container */}
      <div className="max-w-7xl mx-auto px-0 sm:px-4 lg:px-6">
        <div className="flex flex-col sm:flex-row bg-slate-950 sm:bg-slate-950/50 rounded-none sm:rounded-2xl shadow-xl border border-slate-800/60 p-2 sm:p-4 gap-3 sm:gap-6">

          {/* Sidebar */}
          <aside className="hidden sm:block w-full sm:w-64 xl:w-72 bg-slate-900/60 rounded-2xl overflow-hidden shadow-inner">
            <Sidebar />
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-6 sm:space-y-8">
            <TopCards />

            <div className="grid grid-cols-12 gap-4">
              <section className="col-span-12 lg:col-span-8 bg-slate-900/50 p-4 rounded-2xl shadow-inner">
                <GrowthChart />
              </section>
              <aside className="col-span-12 lg:col-span-4 bg-slate-900/50 p-4 rounded-2xl shadow-inner">
                <InvestPanel />
              </aside>
            </div>
          </main>
        </div>
      </div>

      {/* 🔹 Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 sm:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed top-0 left-0 w-64 sm:w-72 h-full bg-slate-900 p-4 z-50 sm:hidden shadow-2xl"
            >
              <Sidebar />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Dashboard;
