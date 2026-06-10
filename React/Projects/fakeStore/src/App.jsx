import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/product" element={<Product />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
