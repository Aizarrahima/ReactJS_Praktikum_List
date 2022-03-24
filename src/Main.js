import React from "react";
import { Routes, Route } from "react-router-dom";

import EnvironmentDay from "./pages/EnvironmentDay";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

const Utama = () => (
  <Routes>
    <Route path="/environment" element={<EnvironmentDay />} />
    <Route path="/products" element={<Products />} />
    <Route path="/cart" element={<Cart />} />
  </Routes>
);

export default Utama;