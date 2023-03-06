import axios from "axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBInput,
} from "mdb-react-ui-kit";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, loginData);
      await getLoggedIn();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className=" mx-auto mt-5">
      <MDBCard className="shadow-sm">
        <MDBCardBody>
          <MDBCardTitle>Log in to your account </MDBCardTitle>
          <form onSubmit={login} className="mt-3">
            <MDBInput
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="validationCustom01"
              required
              label="Email"
              className="mb-3"
            />
            <MDBInput
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              id="validationCustom02"
              required
              type="password"
              label="Password"
              className="mb-3"
            />
            <div className="mt-3">
              <MDBBtn color="dark" className="me-2 shadow-sm" type="submit">
                Login
              </MDBBtn>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default Login;
