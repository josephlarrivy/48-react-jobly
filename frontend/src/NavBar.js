import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

import CurrentUserContext from "./CurrentUserContext";

import './NavBar.css'


const NavBar = () => {

  const currentUser = useContext(CurrentUserContext);

  if (currentUser == 'unverified') {
    return (
      <>
        <Navbar>

          <NavLink to="/" className="navbar-brand">
            Jobly
          </NavLink>

          <Nav className="ml-auto" navbar>

            <NavItem>
              <NavLink to="/login">Log In</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/signup">Register</NavLink>
            </NavItem>

          </Nav>
        </Navbar>
      </>
    )
  }


  return (
    <>
      <Navbar>

        <NavLink to="/" className="navbar-brand">
          Jobly
        </NavLink>

        <Nav className="ml-auto" navbar>

          <NavItem>
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/Profile">Profile</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/login">Log In</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/signup">Register</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/logout">Log Out</NavLink>
          </NavItem>

          <NavItem>
            <NavLink to="/test">test</NavLink>
          </NavItem>

        </Nav>
      </Navbar>
    </>
  )
}

export default NavBar;