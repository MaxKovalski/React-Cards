import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Logon/Login";
import SignUp from "./Logon/SignUp";
import Account from "./Logon/Account";
export default function Router({ theme }) {
  return (
    <Routes>
      {/* <Route path="/" element{}/> */}
      <Route path="/login" element={<Login theme={theme} />} />
      <Route path="/signup" element={<SignUp theme={theme} />} />
      <Route path="/account" element={<Account theme={theme} />} />
    </Routes>
  );
}
