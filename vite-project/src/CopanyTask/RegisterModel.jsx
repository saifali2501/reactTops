import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import UserTable from './UserTable';

export default function RegisterModel() {
  const [loginModal, setLoginModal] = useState(false);
  const [card, setCard] = useState({
    email: "",
    password: "",
  });
  const [mycard, setMycard] = useState([]);

  const getData = (e) => {
    e.preventDefault();
    if (card.email.length > 0 && card.password.length > 0) {
      setMycard([...mycard, card]);
      setCard({
        email: "",
        password: "",
      });
      toggleLoginModal(); // Close the modal after adding the data
    } else {
      alert("Fill in all values");
    }
  };

  const toggleLoginModal = () => setLoginModal(!loginModal);

  return (
    <>
      {/* <Button color="danger" onClick={toggleLoginModal}>
        Click Me
      </Button> */}

      <Form onSubmit={getData} autoComplete='off'>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            value={card.email}
            id="exampleEmail"
            name="email"
            placeholder="Email"
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
            placeholder="Password"
            type="password"
            onChange={(e) => setCard({ ...card, password: e.target.value })}
          />
        </FormGroup>

        <Button type="submit" className="w-100" style={{ backgroundColor: "red" }}>
          Add User
        </Button>
      </Form>

      <UserTable modal={loginModal} toggle={toggleLoginModal} mycard={mycard} />
    </>
  );
}
