import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Authorization from "./pages/Authorization";
import Tractors from "./pages/Tractors";
import CreateTractor from "./pages/CreateTractor";
import TractorDetails from "./pages/TractorDetails";
import Agros from "./pages/Agros";
import CreateAgro from "./pages/CreateAgro";
import AgroDetails from "./pages/AgroDetails";
import News from "./pages/News";
import CreateNew from "./pages/CreateNew";
import NewDetails from "./pages/NewDetails";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import CreateSlider from "./pages/CreateSlider";
import SliderDetails from "./pages/SliderDetails";
import Sliders from "./pages/Sliders";

function App() {
  const [api] = useState("http://91.210.169.195:8000");
  // const [api] = useState("http://localhost:8000");
  const [isAdmin, setIsAdmin] = useState(
    JSON.parse(sessionStorage.getItem("authAdmin")) || false
  );

  return (
    <Router>
      <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <Routes>
        <Route
          path="/"
          element={
            isAdmin ? (
              <Tractors api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/agro"
          element={
            isAdmin ? (
              <Agros api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/news"
          element={
            isAdmin ? (
              <News api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/order"
          element={
            isAdmin ? (
              <Orders api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/slider"
          element={
            isAdmin ? (
              <Sliders api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/create"
          element={
            isAdmin ? (
              <CreateTractor api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/agro/create"
          element={
            isAdmin ? (
              <CreateAgro api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/news/create"
          element={
            isAdmin ? (
              <CreateNew api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/slider/create"
          element={
            isAdmin ? (
              <CreateSlider api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/agro/:id"
          element={
            isAdmin ? (
              <AgroDetails api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/news/:id"
          element={
            isAdmin ? (
              <NewDetails api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/order/:id"
          element={
            isAdmin ? (
              <OrderDetails api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/slider/:id"
          element={
            isAdmin ? (
              <SliderDetails api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/:id"
          element={
            isAdmin ? (
              <TractorDetails api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
