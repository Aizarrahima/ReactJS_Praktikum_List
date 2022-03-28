import React from "react";
import { Routes, Route } from "react-router-dom";

import EnvironmentDay from "./pages/EnvironmentDay";
import CartPages from "./pages/CartPages";

const Utama = () => (
  <Routes>
    <Route path="/environment" element={<EnvironmentDay />} />
    <Route path="/cart" element={<CartPages />} />
  </Routes>
);

export default Utama;
