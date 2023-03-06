import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import AuthContext from "./context/AuthContext";
const PublicRoute = ({ children }) => {
  const { loggedIn } = useContext(AuthContext); // Your hook to get login status

  if (loggedIn) {
    return (
      <>
        <Navigate exact to="/" />
        <Contacts />
      </>
    );
  }
  return children;
};
export default PublicRoute;
