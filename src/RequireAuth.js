import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import AuthContext from "./context/AuthContext";
const RequireAuth = ({ children }) => {
  const { loggedIn } = useContext(AuthContext); // Your hook to get login status

  if (!loggedIn) {
    return (
      <>
        <Navigate exact to="/login" />
        <Login />
      </>
    );
  }
  return children;
};
export default RequireAuth;
