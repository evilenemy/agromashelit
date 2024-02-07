import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import Tractors from "./pages/Tractors";
import Agrotechnics from "./pages/Agrotechnics";
import SubmitOrder from "./pages/SubmitOrder";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";

function App() {
  // const [api] = useState("http://188.225.79.240:8000");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/tractors" element={<Tractors />} />
        <Route path="/agrotechnics" element={<Agrotechnics />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/submit" element={<SubmitOrder />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
