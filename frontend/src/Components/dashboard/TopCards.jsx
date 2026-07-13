import React from "react";
import { DollarSign, CreditCard, PieChart, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TopCards = () => {
  const navigate = useNavigate();

  const cards = [
    { title: "Income", value: "$8,420", icon: <DollarSign />, path: "/income" },
    { title: "Expense", value: "$2,130", icon: <CreditCard />, path: "/expense" },
    { title: "Remaining", value: "$6,290", icon: <PieChart />, path: "/remaining" },
    { title: "Target Saving", value: "$12,000", icon: <Target />, path: "/saving" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((c) => (
        <motion.div
          key={c.title}
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          onClick={() => navigate(c.path)}
          className="cursor-pointer bg-slate-800 hover:bg-slate-700 transition-all duration-300 p-4 sm:p-5 rounded-xl border border-slate-700/50 shadow-lg flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-slate-900/80 flex items-center justify-center">
              {React.cloneElement(c.icon, {
                className: "w-6 h-6 sm:w-7 sm:h-7 text-cyan-400",
              })}
            </div>
            <div>
              <p className="text-sm sm:text-base text-slate-400">{c.title}</p>
              <p className="text-lg sm:text-xl font-semibold text-white">
                {c.value}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TopCards;
