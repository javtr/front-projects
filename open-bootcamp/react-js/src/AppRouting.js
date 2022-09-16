import React from "react";
import Dashboard from "./pages/dashboard/dashboard";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/auth/login";

export default function AppRouting() {
  const loged = true;

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            loged ? <Navigate to="dashboard" /> : <Navigate to="login" />
          }
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>

        <Route
          path="/dashboard"
          element={loged ? <Dashboard></Dashboard> : <Login></Login>}
        ></Route>

      </Routes>
    </div>
  );
}
