import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const LogingForm = ({modal,toggle}) => {
  // const [modal, setModal] = useState(false);
  // const toggle = () => setModal(!modal);

  const [card, setCard] = useState({
    email: '',
    password: '',
  });

  const [mycard, setMycard] = useState([]);
  const [index, setIndex] = useState(null);

  const getData = () => {
    if (card.email.trim() && card.password.trim()) {
      setMycard([...mycard, card]);
      localStorage.setItem('addd', JSON.stringify([...mycard, card]));
      setCard({
        email: '',
        password: '',
      });
    } else {
      alert('Please fill in both email and password fields');
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem('addd');
    const parsedData = JSON.parse(storedData);
    setMycard(parsedData || []);
  }, []);

  const updateData = () => {
    if (index || index === 0) {
      mycard.splice(index, 1, card);
      setMycard([...mycard]);
      setCard({
        email: '',
        password: '',
      });
      setIndex(null);
    } else {
      alert('Please select an item to update');
    }
  };

  const handleToggle = () => {
    toggle(); // Close the modal
  };

  return (
    <div>
      {/* <Button style={{ backgroundColor: 'red' }} onClick={toggle}>
        Loging
      </Button> */}
      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>Login Title</ModalHeader>
        <ModalBody>
          <Form onSubmit={getData} autoComplete="off">
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                value={card.email}
                id="exampleEmail"
                name="email"
                placeholder="Enter your email"
                type="email"
                onChange={(e) => setCard({ ...card, email: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                value={card.password}
                id="examplePassword"
                name="password"
                placeholder="Enter your password"
                type="password"
                onChange={(e) => setCard({ ...card, password: e.target.value })}
              />
            </FormGroup>
            {index || index === 0 ? (
              <Button className="w-100" style={{ backgroundColor: 'red' }} onClick={updateData}>
                Update...
              </Button>
            ) : (
              <Button className="w-100 bg-black" type="submit">
                Submit
              </Button>
            )}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LogingForm;
