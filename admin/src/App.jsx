import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Authorization from "./pages/Authorization";
import Tractors from "./pages/Tractors";
import CreateTractor from "./pages/CreateTractor";
import TractorDetails from "./pages/TractorDetails";

function App() {
  // const [api] = useState("http://188.225.79.240:8000");
  const [api] = useState("http://localhost:8000");
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
