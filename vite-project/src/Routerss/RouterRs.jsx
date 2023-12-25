import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,

 
} from 'reactstrap';

function RouterRs(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className='d-flex justify-content-center gap-4' {...args}>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className='text-black d-flex gap-4 justify-content-center' to={"/"}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={"/servis"}>
                servis
              </NavLink>
            </NavItem>
           
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default RouterRs;
