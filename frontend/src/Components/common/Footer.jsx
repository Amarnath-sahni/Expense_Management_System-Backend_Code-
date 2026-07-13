import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-600/40 pt-6  text-gray-300 px-8 py-14 backdrop-blur-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
    {/* Brand Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
  <h2 className="text-2xl font-bold text-white">Smart Expense</h2>
  <p className="mt-2 text-sm text-gray-400">
    Track, Save & Grow Your Money Smartly.
  </p>

  <div className="flex gap-4 mt-4 text-xl">
    {/* Instagram */}
    <a
      href="#" // TODO: add Instagram link
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-indigo-400 transition-colors"
    >
      <FaInstagram />
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/Amarnath-sahni?tab=repositories" 
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-indigo-400 transition-colors"
    >
      <FaGithub />
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/amarnath-sahni-171963281/" 
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-indigo-400 transition-colors"
    >
      <FaLinkedin />
    </a>
  </div>
</motion.div>


        {/* Quick Links */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
            <li><Link to="/blogs" className="hover:text-indigo-400 transition-colors">About</Link></li>
            <li><Link to="/" className="hover:text-indigo-400 transition-colors">Features</Link></li>
            <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Tools & Features */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h3 className="text-lg font-semibold text-white mb-3">Tools & Features</h3>
          <ul className="space-y-2">
            <li><Link to="/expense" className="hover:text-indigo-400 transition-colors">Add Expense</Link></li>
            <li><Link to="/reports" className="hover:text-indigo-400 transition-colors">Reports</Link></li>
            <li><Link to="/sip" className="hover:text-indigo-400 transition-colors">SIP Calculator</Link></li>
            {/* <li><Link to="/planner" className="hover:text-indigo-400 transition-colors">Monthly Planner</Link></li>
            <li><Link to="/loan-tracker" className="hover:text-indigo-400 transition-colors">Loan Tracker</Link></li> */}
          </ul>
        </motion.div>

        {/* Buttons Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h3 className="text-lg font-semibold text-white mb-3">Get Started</h3>
          <div className="flex flex-col gap-3">
            <Link to="/signup" className="w-full text-center bg-white/90 text-black py-2 rounded-xl font-semibold hover:bg-white/100 transition-all">
              Register
            </Link>
             <Link to="/login" className="w-full text-center bg-blue-600/90 py-2 rounded-xl font-semibold hover:bg-blue-600 transition-all">
              Login
            </Link>
            <Link to="/signup" className="w-full text-center bg-blue-600/90 py-2 rounded-xl font-semibold hover:bg-blue-600 transition-all">
              Subscribe
            </Link>
            {/* <Link to="/partner" className="w-full text-center bg-green-600/90 py-2 rounded-xl font-semibold hover:bg-green-600 transition-all">
              Become Partner
            </Link> */}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-10 border-t border-gray-700/40 pt-6 text-sm text-gray-400">
        © 2025 Smart Expense. All Rights Reserved. <br />
        Made with ❤️ by Amarnath Sahni
      </div>
    </footer>
  );
}
