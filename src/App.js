import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; 
import EnvironmentDay from "./pages/EnvironmentDay";
import ShoppingCart from "./pages/ShoppingCart";
import Home from "./pages/Home";
  
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/environment" element={<EnvironmentDay />} />
        <Route path="/cart" element={<ShoppingCart />} />
        {/* <Home/> */}
      </Routes>
    </>
  );
}

export default App;
