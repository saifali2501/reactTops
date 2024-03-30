import React, { useState } from 'react';
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';

export default function Canvas() {
  // State to manage the visibility of the Offcanvas
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the Offcanvas visibility
  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div>
        {/* Button to toggle Offcanvas */}
        <Button color="primary" onClick={toggleOffcanvas}>
          Open
        </Button>
        {/* Offcanvas component */}
        <Offcanvas isOpen={isOpen} toggle={toggleOffcanvas}>
          <OffcanvasHeader toggle={toggleOffcanvas}>Offcanvas</OffcanvasHeader>
          <OffcanvasBody>
            <strong>This is the Offcanvas body.</strong>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    </div>
  );
}
