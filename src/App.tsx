import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Collection from "./pages/Collection";
import Men from "./pages/Men";
import Product from "./pages/Product";
import Women from "./pages/Women";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { useEffect } from "react";


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
        <Route path="/collection" element={<Collection />} />
        <Route path="/men" element={<Men />} /> 
        <Route path="/women" element={<Women />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
