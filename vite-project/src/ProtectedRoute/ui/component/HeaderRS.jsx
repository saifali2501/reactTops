import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import Register from "./Modal/Register";

function HeaderRS(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Register/>
      <Navbar style={{ width: "100vw" }} {...args}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="w-100 justify-content-between d-flex gap-3 align-items-center" navbar>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
          <Button className="me-5" color="danger">Login</Button>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default HeaderRS;
