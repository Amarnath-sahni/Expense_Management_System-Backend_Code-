// src/main.jsx
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ContextProvider } from './context/context';
import { AuthProvider } from './context/AuthContext';

// ReactDOM 18 root render method
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   {/* BrowserRouter enables client-side routing */}
  //  
  //     <App />
  //   </BrowserRouter>
  // </React.StrictMode>
   <BrowserRouter>
   <AuthProvider>

    <ContextProvider>
    <App/>
  </ContextProvider>
  
   </AuthProvider>
   
   </BrowserRouter>
  
);
