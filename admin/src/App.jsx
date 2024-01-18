import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Authorization from "./pages/Authorization";
import CreateProduct from "./pages/CreateProduct";
import axios from "axios";
import Categories from "./pages/Categories";
import CreateCategory from "./pages/CreateCategory";
import Events from "./pages/Events";
import CreateEvent from "./pages/CreateEvent";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";
import ProductDetails from "./pages/ProductDetails";
import CategoryDetails from "./pages/CategoryDetails";
import EventsDetails from "./pages/EventDetails";
import UserDetails from "./pages/UserDetails";

function App() {
  const [api] = useState("http://188.225.79.240:8000");
  const [isAdmin, setIsAdmin] = useState(
    JSON.parse(sessionStorage.getItem("authAdmin")) || false
  );

  if (localStorage.getItem("token"))
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;

  return (
    <Router>
      <Navbar isAdmin={isAdmin} setIsAdmin={setIsAdmin} />
      <Routes>
        <Route
          path="/"
          element={
            isAdmin ? (
              <Products api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/create"
          element={
            isAdmin ? (
              <CreateProduct api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/:id"
          element={
            isAdmin ? (
              <ProductDetails api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/categories"
          element={
            isAdmin ? (
              <Categories api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/categories/create"
          element={
            isAdmin ? (
              <CreateCategory api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/categories/:id"
          element={
            isAdmin ? (
              <CategoryDetails api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/events"
          element={
            isAdmin ? (
              <Events api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/events/create"
          element={
            isAdmin ? (
              <CreateEvent api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/events/:id"
          element={
            isAdmin ? (
              <EventsDetails api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/users"
          element={
            isAdmin ? (
              <Users api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/users/create"
          element={
            isAdmin ? (
              <CreateUser api={api} />
            ) : (
              <Authorization setIsAdmin={setIsAdmin} api={api} />
            )
          }
        />
        <Route
          path="/users/:id"
          element={
            isAdmin ? (
              <UserDetails api={api} />
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
