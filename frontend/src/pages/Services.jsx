import React from "react";
import { motion } from "framer-motion";
import { HiOutlineChartBar, HiOutlineShieldCheck, HiOutlineChartPie, HiOutlineHome, HiOutlineSparkles, HiOutlineBadgeCheck } from "react-icons/hi";
import { Link } from "react-router-dom";

const services = [
  { id: 1, title: "Smart Dashboard", description: "View your balance, goals & alerts at a glance.", icon: <HiOutlineHome className="w-6 h-6" />, cta: "/dashboard" },
  { id: 2, title: "SIP Calculator", description: "Calculate your SIP maturity visually & easily.", icon: <HiOutlineChartPie className="w-6 h-6" />, cta: "/sip" },
  { id: 3, title: "AI Finance Assistant", description: "Get personalized budgeting & saving plans.", icon: <HiOutlineSparkles className="w-6 h-6" />, cta: "/ai" },
  { id: 4, title: "Financial Reports", description: "Generate monthly & yearly CSV/PDF reports.", icon: <HiOutlineBadgeCheck className="w-6 h-6" />, cta: "/reports" },
  { id: 5, title: "Secure Cloud Storage", description: "Encrypted backups for receipts & documents.", icon: <HiOutlineShieldCheck className="w-6 h-6" />, cta: "/settings/backups" },
  { id: 6, title: "Budget Tracking", description: "Track income & expenses automatically.", icon: <HiOutlineChartBar className="w-6 h-6" />, cta: "/dashboard" },
];

const cardVariants = {
  offscreen: { y: 30, opacity: 0 },
  onscreen: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 0.6 } },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* HERO */}
      <section className="container mx-auto px-6 py-16 text-center">
        <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl font-bold text-white">
          {/* <span className="text-indigo-400">Services</span> */}
          <h2 className="text-4xl font-extrabold">
          Smart<span className="text-teal-400">Expend</span> Services</h2>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-4 text-gray-300 text-lg max-w-xl mx-auto">
          Smarter money. Better decisions. Access all the tools you need to master your finances in one place.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup">
            <button className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium shadow-md">Get Started</button>
          </Link>
          <Link to="/pricing">
            <button className="px-6 py-3 rounded-full border border-gray-700 text-gray-200 hover:bg-gray-800">View Plans</button>
          </Link>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section className="container mx-auto px-6 pb-20">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" initial="offscreen" whileInView="onscreen" viewport={{ once: true, amount: 0.15 }}>
          {services.map((s) => (
            <motion.div key={s.id} variants={cardVariants} className="group bg-gray-800/40 border border-gray-700 p-6 rounded-xl shadow-sm hover:shadow-lg hover:bg-gray-800/60 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gray-700/50 border border-gray-600 group-hover:bg-indigo-600 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-indigo-300">{s.icon}</div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-gray-300 text-sm">{s.description}</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <Link to={s.cta} className="text-sm font-medium text-indigo-300 hover:underline">Learn more</Link>
                <Link to={s.cta}>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="px-3 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-sm">
                    Try it
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA BAR */}
      <footer className="bg-gray-900/80 border-t border-gray-800">
        <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-semibold text-white">Ready to take control of your money?</h4>
            <p className="text-sm text-gray-400">Start free — upgrade when you’re ready.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/signup">
              <button className="px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium">Get Started</button>
            </Link>
            <Link to="/contact">
              <button className="px-5 py-2 rounded-full border border-gray-700 text-gray-200 hover:bg-gray-800">Contact Sales</button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
