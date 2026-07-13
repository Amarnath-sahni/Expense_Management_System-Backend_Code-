import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-16 px-6">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-400">Contact Us</h1>
        <p className="text-gray-300 mt-2">We'd love to hear from you! Reach out anytime.</p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
          <div className="bg-gray-800 p-6 rounded-2xl flex items-center gap-4">
            <HiOutlineMail className="text-indigo-400 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-400">amarnathgithub@gmail.com</p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl flex items-center gap-4">
            <HiOutlinePhone className="text-indigo-400 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-400">+91 914 251 1468</p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl flex items-center gap-4">
            <HiOutlineLocationMarker className="text-indigo-400 text-3xl" />
            <div>
              <h3 className="text-lg font-semibold">Office</h3>
              <p className="text-gray-400">MuzaffarPur, Bihar</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ZOOM / GOOGLE MEET SECTION */}
      
    </div>
  );
}
