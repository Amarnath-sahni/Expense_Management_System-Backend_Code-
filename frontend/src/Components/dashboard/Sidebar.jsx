// src/components/Sidebar.jsx
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { User,Home, Settings, HelpCircle, Brain } from 'lucide-react'
import { motion } from 'framer-motion'
import {useAuth} from '../../context/AuthContext';


const Sidebar = () => {
  const location = useLocation()
const links = [
  { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
  { name: 'Settings', path: '/settings', icon: <Settings className="w-5 h-5" /> },
  { name: 'Help Center', path: '/help', icon: <HelpCircle className="w-5 h-5" /> },
  { name: 'AI Advisor', path: '/ai', icon: <Brain className="w-5 h-5" /> },
]

//geting auth data
const {user, login, logout} = useAuth();


  return (
    <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="h-full p-4 rounded-xl card-sketch">
      <div className="flex flex-col items-center gap-4 rounded-xl shadow-lg p-2">
        <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center">
          <User className="w-12 h-12 text-slate-300" />
        </div>

        <div className="w-full text-center">
          <h3 className="font-semibold">{user?.name}</h3>
          <p className="text-sm text-slate-400">VIP Plus</p>
        </div>

        <div className="w-full mt-4 space-y-1">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
             className={`block py-2 px-3 rounded transition-all ${
  location.pathname === link.path
    ? 'bg-cyan-600 text-white'
    : 'flex items-center gap-3 p-2 rounded-md hover:bg-slate-800'
}`}

            >{link.icon}
            <span>
              {link.name}
            </span>
            </Link>
          ))}
        </div>
      </div>
    <button className='bg-transparent hover:bg-blue-500  text-slate-400 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded'>edit</button>

    </motion.div>
  )
}

export default Sidebar
