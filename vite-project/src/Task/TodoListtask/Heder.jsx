import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import TodoTask from "./TodoTask";
import Loging from "./Loging";

function Header() {
  // const [loginModal, setLoginModal] = useState(false);

  // const loginToggle = () => setLoginModal(!loginModal);

  return (
    <div>
      <div>

      <Loging/>
      {/* <TodoTask modal={loginModal} toggle={loginToggle}/> */}
      <Navbar style={{ width: "100%" }}>
        <Nav className="w-100 justify-content-between d-flex align-items-center">
          <NavItem>
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            {/* <NavLink to="/">Home</NavLink> */}
            {/* <NavLink to="/panding">Panding</NavLink>
            <NavLink to="/done">Done</NavLink> */}
            <NavLink to="/todo">TodoList</NavLink>

          </NavItem>
          {/* <Button onClick={loginToggle}  className="me-5" color="danger">
            Login
          </Button> */}
        </Nav>
      </Navbar>
          </div>
    </div>
  );
}

export default Header;
