import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Master Your Finances in 2025",
    excerpt: "Learn smart budgeting, saving, and investing strategies to grow your wealth.",
    image: "https://source.unsplash.com/600x400/?finance,money",
    link: "/blog/1",
  },
  {
    id: 2,
    title: "SIP Investing Explained",
    excerpt: "Step-by-step guide to understand SIP and maximize your returns.",
    image: "https://source.unsplash.com/600x400/?investment",
    link: "/blog/2",
  },
  {
    id: 3,
    title: "AI Tools for Personal Finance",
    excerpt: "Explore AI-powered apps to track expenses and manage your money smartly.",
    image: "https://source.unsplash.com/600x400/?technology,ai",
    link: "/blog/3",
  },
  {
    id: 4,
    title: "How to Save for Big Goals",
    excerpt: "Tips on creating effective savings plans for vacations, education, and more.",
    image: "https://source.unsplash.com/600x400/?savings,goal",
    link: "/blog/4",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      
      {/* HERO */}
      <section className="py-16 px-6 text-center bg-gray-800/50 backdrop-blur-md">
        <motion.h1 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold text-white"
        >
          SmartSpense Blog
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -5 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }}
          className="mt-4 text-gray-300 text-lg max-w-xl mx-auto"
        >
          Stay updated with the latest tips, guides, and tools to manage your finances smartly.
        </motion.p>
      </section>

      {/* BLOG GRID */}
      <section className="py-16 px-6 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-300 mb-4">{blog.excerpt}</p>
              <Link 
                to={blog.link} 
                className="inline-block text-indigo-400 hover:text-indigo-500 font-medium"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gray-800/40 backdrop-blur-md">
        <h2 className="text-3xl font-bold text-white mb-4">Want More Tips?</h2>
        <p className="text-gray-300 mb-6">Subscribe to our newsletter to get weekly finance insights directly in your inbox.</p>
        <Link to="/subscribe">
          <button className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium shadow-md">
            Subscribe Now
          </button>
        </Link>
      </section>

    </div>
  );
}
