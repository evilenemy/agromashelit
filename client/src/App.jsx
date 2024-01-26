import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import ProductDetail from "./pages/ProductDetail";
// import Saveds from "./pages/Saveds";
// import Cart from "./pages/Cart";
import Footer from "./components/Footer";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import { useAuthContext } from "./hooks/useAuthContext";
// import Search from "./pages/Search";
// import Profile from "./pages/Profile";

function App() {
  // const [api] = useState("http://188.225.79.240:8000");
  // const { user: user_ } = useAuthContext();
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   setUser(user_);
  // }, [user_]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/saved" element={<Saveds />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login api={api} />} />
        <Route path="/signup" element={<Signup api={api} />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
