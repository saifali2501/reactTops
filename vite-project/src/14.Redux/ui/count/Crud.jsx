import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { addUser } from "../../redux/feature/User";

export default function Crud() {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  // let [myuser,setMyuser] = useState([])

  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(addUser(user));
    // setMyuser([...myuser,user])
    // console.log(" addHandler:", addHandler);
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="with a placeholder"
            type="email"
            onChange={(e) => setUser({ user, email: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            id="examplePassword"
            name="password"
            placeholder="password placeholder"
            type="password"
            onChange={(e) => setUser({ user, password: e.target.value })}
          />
        </FormGroup>

        <FormGroup check>
          <Input type="checkbox" /> <Label check>Check me out</Label>
        </FormGroup>
        <Button onClick={() => addHandler()}>Submit</Button>
      </Form>
    </div>
  );
}
