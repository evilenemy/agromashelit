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
  const [lang, setLang] = useState(
    JSON.parse(localStorage.getItem("lang")) || "ru"
  );

  return (
    <Router>
      <Navbar lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Home api={api} lang={lang} />} />
        <Route
          path="/tractor/:id"
          element={<ProductDetail api={api} lang={lang} />}
        />
        <Route
          path="/agro/:id"
          element={<AgroDetails api={api} lang={lang} />}
        />
        <Route path="/tractors" element={<Tractors api={api} lang={lang} />} />
        <Route
          path="/agrotechnics"
          element={<Agrotechnics api={api} lang={lang} />}
        />
        <Route path="/news" element={<News api={api} />} lang={lang} />
        <Route
          path="/news/:id"
          element={<NewsDetail api={api} lang={lang} />}
        />
        <Route path="/submit" element={<SubmitOrder api={api} lang={lang} />} />
      </Routes>
      <Footer lang={lang} />
    </Router>
  );
}

export default App;
