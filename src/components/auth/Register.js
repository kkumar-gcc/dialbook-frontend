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

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };

      // await axios.post("http://localhost:5000/auth/", registerData);
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/`, registerData);
      await getLoggedIn();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="mx-auto mt-5">
      <MDBCard className="shadow-sm">
        <MDBCardBody>
          <MDBCardTitle>Register a new account</MDBCardTitle>
          <form onSubmit={register} className="mt-3">
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
            <MDBInput
              name="passwordVerify"
              onChange={(e) => setPasswordVerify(e.target.value)}
              value={passwordVerify}
              id="validationCustom02"
              required
              type="password"
              label="Verify password"
            />
            <div className="mt-3">
              <MDBBtn color="dark" className="me-2 shadow-sm" type="submit">
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default Register;
