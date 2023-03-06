import axios from "axios";
import { MDBBtn } from "mdb-react-ui-kit";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  async function logOut() {
    // await axios.get("http://localhost:5000/auth/logout");
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/logout`);
    await getLoggedIn();
    navigate("/login");
  }

  return (
    <MDBBtn onClick={logOut} outline color="dark" className="me-2" type="button" >
      Logout
    </MDBBtn>
  );
}

export default LogOutBtn;
