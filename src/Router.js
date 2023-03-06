import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Contacts from "./components/contacts/Contacts";
import Navbar from "./components/layout/Navbar";
import NotFound from "./NotFound";
import PublicRoute from "./PublicRoute";
import RequireAuth from "./RequireAuth";

function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="m-2 m-x-4">
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Contacts />
              </RequireAuth>
            }
          />
          <Route path='/404' element={<NotFound/>} />
          <Route path='*' exact={true} element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Router;
