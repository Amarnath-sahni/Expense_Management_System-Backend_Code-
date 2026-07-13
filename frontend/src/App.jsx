import React from "react";
import { Routes, Route } from "react-router-dom";

import PrivateRoute from "./Components/common/PrivateRoute";
import Navbar from "./Components/common/Navbar";
import FourCart from "./Components/fourCart/FourCart";

import Home from "./pages/Home";
import BlogPage from "./Components/blogpage/BlogPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Services from "./pages/Services";
import ContactPage from "./pages/ContactPage";

import Dashboard from "./Components/dashboard/Dashboard";
import Gemini_main from "./pages/Gemini_main";
import Pricing from "./Components/common/Pricing";
import SipCalculator from "./Components/common/SipCalculator";
import HelpCenter from "./Components/blogpage/HelpCenter";
import SettingsPage from "./Components/blogpage/SettingPage";

export default function App() {
  return (
    <>
      <Navbar />
      <FourCart />

      <Routes>
        {/* 🌐 Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* 🔐 Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ai" element={<Gemini_main />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/sip" element={<SipCalculator />} />
          <Route path="/help" element={<HelpCenter />} />
           <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </>
  );
}


// import React from 'react'
// import Gemini_main from './pages/Gemini_main'

//  const App = () => {
//   return (
//     <>
//     {/* <Sidebar/>
//     <Main/> */}
//     <Gemini_main/>
//     </>
//   )
// }

// export default App