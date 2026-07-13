import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Expense from './Expense';
import Income from './Income';
import Remaining from './Remaining';
import Saving from './Saving';

function FourCart() {
  return (
    <Routes>
      <Route path="/income" element={<Income />} />
      <Route path="/expense" element={<Expense />} />
      <Route path="/remaining" element={<Remaining />} />
      <Route path="/saving" element={<Saving />} />
    </Routes>
  );
}

export default FourCart;
