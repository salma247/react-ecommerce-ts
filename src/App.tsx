import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Category from "./pages/Category";
import Product from "./pages/Product"; 

function App() {
  useEffect(() => {
    function scrollToTop() {
      window.scrollTo(0, 0);
    }
    scrollToTop();
  }, []);

  return (
    <div className="xs:px-2 xs:py-8 px-4 font-kumbh md:px-16 md:py-8 overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection/*" element={<Category category="collection" />} />
        <Route path="/men/*" element={<Category category="men" />} />
        <Route path="/women/*" element={<Category category="women" />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
