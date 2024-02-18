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
import AgroDetails from "./pages/AgroDetails";

function App() {
  const [api] = useState("https://agromashelite.ru");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home api={api} />} />
        <Route path="/tractor/:id" element={<ProductDetail api={api} />} />
        <Route path="/agro/:id" element={<AgroDetails api={api} />} />
        <Route path="/tractors" element={<Tractors api={api} />} />
        <Route path="/agrotechnics" element={<Agrotechnics api={api} />} />
        <Route path="/news" element={<News api={api} />} />
        <Route path="/news/:id" element={<NewsDetail api={api} />} />
        <Route path="/submit" element={<SubmitOrder api={api} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
