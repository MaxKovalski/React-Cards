import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Logon/Login";
import SignUp from "./Logon/SignUp";
import Account from "./Logon/Account";
import Cards from "./Cards/Cards";
import FavCards from "./FavCards/FavCards";
import MyCards from "./Cards/MyCards";
import About from "./Pages/About";
import UserManagement from "./Admin/UserManagement";
export default function Router({ theme }) {
  return (
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/fav-cards" element={<FavCards />} />
      <Route path="/my-cards" element={<MyCards theme={theme} />} />
      <Route path="/admin" element={<UserManagement />} />
      <Route path="/login" element={<Login theme={theme} />} />
      <Route path="/signup" element={<SignUp theme={theme} />} />
      <Route path="/account" element={<Account theme={theme} />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
