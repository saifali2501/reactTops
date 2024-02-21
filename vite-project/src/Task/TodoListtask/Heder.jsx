import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import Loging from "./Loging";
import RegisterModal from "./RegisterModal";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisteModal] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggleLoginModal = () => setLoginModal(!loginModal);

  const toggleRegisterModal = () => setRegisteModal(!registerModal)

  return (
    <div>
      <Loging modal={loginModal} toggle={toggleLoginModal} />
      <RegisterModal modal={registerModal} toggle={toggleRegisterModal} />
      <Navbar expand="md" style={{ width: "100vw" }}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className=" w-100 justify-content-between d-flex gap-5 align-items-center"
            navbar
          >
            <NavItem className="me-4 tahid d-flex gap-3">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/todo">TodoList</NavLink>
              <NavLink to="/user">UserData</NavLink>
              <NavLink to="/loging">LoginData</NavLink>
            </NavItem>
            <div>
              <Button
                onClick={toggleRegisterModal}
                className="me-5"
                color="danger"
                >
                Register
              </Button>
              <Button color="danger" onClick={toggleLoginModal} className="me-5">
                Login
              </Button>
            </div>
                </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
