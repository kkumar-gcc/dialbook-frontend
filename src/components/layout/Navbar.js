import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <MDBNavbar expand="lg" className="shadow-sm" light bgColor="white">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">DialBook</MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavRight(!showNavRight)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav
            right
            fullWidth={false}
            className="mr-auto mb-2 mb-lg-0"
          ></MDBNavbarNav>
          {loggedIn === false && (
            <>
              <Link to="/login">
                <MDBBtn outline color="dark" className="me-2">
                  Login
                </MDBBtn>
              </Link>
              <Link to="/register">
                <MDBBtn color="dark" className="me-2 shadow-sm" type="button">
                  Register
                </MDBBtn>
              </Link>
            </>
          )}
          {loggedIn === true && (
            <>
              {/* <Link to="/customer">Customers</Link> */}

              <LogOutBtn />
            </>
          )}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
